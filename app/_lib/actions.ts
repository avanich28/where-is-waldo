"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { prisma } from "./prisma";
import { auth, signIn, signOut } from "./auth";

export async function isUsernameExist(name) {
  try {
    const exist = await prisma.user.findFirst({ where: { name } });
    return !!exist;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Cannot check an username whether it is already used ot not! Please try again later!"
    );
  }
}

export async function signUpAction(prevState, formData) {
  const name = formData.get("name").trim();

  if (await isUsernameExist(name))
    return { error: "This name is already used! Please try other names" };

  const password = formData.get("password");
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
    console.error(error.stack);
    return { error: "Failed to sign up, please try again!" };
  }

  redirect("/games");
}

export async function logInAction(prevState, formData) {
  const name = formData.get("name").trim();
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      redirect: false,
      name,
      password,
    });
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    return { error: "Invalid email or password" };
  }

  redirect("/games");
}

export async function logOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function updateUsername(prevState, formData) {
  // 1) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  // 2) Authorization
  const name = formData.get("name").trim();

  if (await isUsernameExist(name))
    return { error: "This name is already used! Please try other names" };

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
    return { error: "Username could not be updated!" };
  }

  revalidatePath("/settings");
}

export async function updatePassword(prevState, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const password = formData.get("password");
  const passwordConfirm = formData.get("passwordConfirm");

  if (password !== passwordConfirm)
    return { error: "Password confirm needs to match  to the password field!" };

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
  } catch (error) {
    console.error(error);
    console.error(error.stack);
    return { error: "Password could not be updated! Please try again" };
  }
}

export async function createRecord(data) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in!");

  const userId = Number(session.user?.id);
  const { gameId, timeCount } = data;

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
