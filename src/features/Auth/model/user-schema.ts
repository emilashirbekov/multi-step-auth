import { z, ZodType } from "zod";
import { LoginFormData, RegisterFormData } from "./login-form.types";

export const UserLoginSchema: ZodType<LoginFormData> = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

export const UserRegisterSchema: ZodType<RegisterFormData> = z
  .object({
    email: z.string().email().nonempty({ message: "Email is required" }),
    name: z.string().nonempty({ message: "Name is required" }),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );
