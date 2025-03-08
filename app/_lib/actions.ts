"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// FIXME connect to backend
export async function signUpAction(formData) {
  console.log(formData.get("name"));
  console.log(formData.get("password"));

  redirect("/games");
}

export async function logInAction(formData) {
  console.log(formData.get("name"));
  console.log(formData.get("password"));

  redirect("/games");
}

export async function updateUsername(formData) {
  console.log(formData.get("name"));

  revalidatePath("/settings");
}

export async function updatePassword(formData) {
  console.log(formData.get("password"));
  console.log(formData.get("passwordConfirm"));

  revalidatePath("/settings");
}

export async function createRecord(data) {
  const { gameId, timeCount } = data;
  const date = new Date();

  // FIXME Get name from auth + connect to database
  const name = "Torque";
  console.log({ gameId, name, timeCount, date });

  revalidatePath("/boards");
}
