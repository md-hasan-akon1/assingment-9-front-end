import * as z from "zod";

export const registrationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  confirmPass: z
    .string()
    .min(6, { message: "Confirm Password must be at least 6 characters long" }),
  bloodType: z.string().nonempty({ message: "Blood type is required" }),
  location: z.string().nonempty({ message: "Location is required" }),
  age: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: "Age must be a number",
    }),

  bio: z.string().optional(),
  lastDonationDate: z.date().nullable().optional(),
});
