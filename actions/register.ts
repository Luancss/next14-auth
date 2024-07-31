"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import bcrypt from "bcryptjs";

import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/data/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedField.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  // TODO: Send verification token email

  return { success: "Confirmation email sent!" };
};
