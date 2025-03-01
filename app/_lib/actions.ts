"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// redirect
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
  console.log(data);

  // revalidatePath("/boards");
}
