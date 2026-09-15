import { z } from 'zod';

/**
 * Standardized email schema:
 * Trims leading/trailing whitespace, converts to lowercase, and validates RFC-compliant email structure.
 * Fully supports numbers, dots, hyphens, plus-addressing, and custom subdomains (e.g. friend246@gmail.com).
 */
export const emailSchema = z
  .string({ required_error: "Email is required." })
  .trim()
  .toLowerCase()
  .min(1, { message: "Email is required." })
  .email({ message: "Please enter a valid email address." });

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const registerSchema = z.object({
  firstName: z.string().trim().min(2, { message: "First name is required." }),
  email: emailSchema,
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  role: z.enum(['university_student', 'freelancer', 'career_changer']),
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Please confirm your password." }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;
