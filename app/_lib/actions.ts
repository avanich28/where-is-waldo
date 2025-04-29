"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import {
  baseUserSchema,
  type FormError,
  passwordSchema,
  type Record,
  recordSchema,
  userSchema,
} from "@/app/_utils/types";
import { auth, signIn, signOut } from "./auth";
import { prisma } from "./prisma";

async function isUsernameExist(name: string): Promise<boolean> {
  try {
    const exist = await prisma.user.findFirst({ where: { name } });
    return !!exist;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Cannot check this username whether it is already used or not! Please try again later!"
    );
  }
}

export async function signUpAction(
  prevState: FormError,
  formData: FormData
): Promise<FormError> {
  const rawData = Object.fromEntries(formData.entries());

  const validateData = userSchema.safeParse(rawData);

  if (!validateData.success)
    return { error: true, message: "Validation failed!" };

  const { name, password } = validateData.data;

  if (await isUsernameExist(name))
    return {
      error: true,
      message: "This name is already used! Please try other names",
    };

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    await prisma.user.create({
      data: { name, password: hashedPassword },
    });

    await signIn("credentials", {
      redirect: false,
      name,
      password,
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack); // FIXME
    return { error: true, message: "Failed to sign up, please try again!" };
  }

  redirect("/games");
}

export async function logInAction(
  prevState: FormError,
  formData: FormData
): Promise<FormError> {
  const rawData = Object.fromEntries(formData.entries());

  const validateData = userSchema.safeParse(rawData);

  if (!validateData.success)
    return { error: true, message: "Validation failed!" };

  const { name, password } = validateData.data;

  try {
    await signIn("credentials", {
      redirect: false,
      name,
      password,
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    return { error: true, message: "Invalid email or password" };
  }

  redirect("/games");
}

export async function logOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateUsername(
  prevState: FormError,
  formData: FormData
): Promise<FormError> {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  // 2) Authorization
  const rawData = Object.fromEntries(formData.entries());

  const validateData = baseUserSchema.safeParse(rawData);

  if (!validateData.success)
    return { error: true, message: "Validation failed!" };

  const { name } = validateData.data;

  if (await isUsernameExist(name))
    return {
      error: true,
      message: "This name is already used! Please try other names",
    };

  const userId = Number(session.user?.id);

  // 3) Update Data
  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    // 4) Error Handling
    return { error: true, message: "Username could not be updated!" };
  }

  revalidatePath("/settings");
  return { error: false };
}

export async function updatePassword(
  prevState: FormError,
  formData: FormData
): Promise<FormError> {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const rawData = Object.fromEntries(formData.entries());

  const validateData = passwordSchema.safeParse(rawData);

  if (!validateData.success)
    return { error: true, message: "Validation failed!" };

  const { password, passwordConfirm } = validateData.data;

  if (password !== passwordConfirm)
    return {
      error: true,
      message: "Password confirm needs to match  to the password field!",
    };

  const userId = Number(session.user?.id);
  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    return { error: false };
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    return {
      error: true,
      message: "Password could not be updated! Please try again",
    };
  }
}

export async function createRecord(data: Record): Promise<void> {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const validateData = recordSchema.safeParse(data);

  if (!validateData.success) throw new Error("Validation failed!");

  const userId = Number(session.user?.id);
  const { gameId, timeCount } = validateData.data;

  try {
    // gameId starts with 1 in database
    await prisma.record.create({
      data: { userId, gameId: gameId + 1, timeCount },
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    throw new Error("Record could not be created! Please try again later");
  }

  revalidatePath("/boards");
}
