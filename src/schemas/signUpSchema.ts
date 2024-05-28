import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "UserName Must be atleast 2 Characters")
  .max(20, "UserName Must be not more than 20 Characters")
  .regex(/^[a-zA-Z0-9_]+$/, "UserName must not contains Special Characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string()
    .min(8, { message: "Password should be atleast 8 Character Long" }),
});
