"use server";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { FormState, SignupFormSchema } from "../definitions";
import prisma from "@/lib/prisma";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log(validatedFields);
  // 2. Prepare data for insertion into database
  const { name, phone, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // 3. Insert the user into the database or call an Library API
    const user = await prisma.user.create({
      data: {
        name,
        phone,
        password: hashedPassword,
      },
    });
    console.log(user);
    // Current steps:
    // 4. Create user session
    await createSession(user.id);
    // 5. Redirect user
  } catch (error: any) {
    console.log(error);
    return {
      message: `An error occurred while creating your account(${error.message}).`,
    };
  }
  redirect("/tab/home");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
