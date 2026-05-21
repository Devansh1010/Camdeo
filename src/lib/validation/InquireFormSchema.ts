import { z } from "zod";

export const enquirySchema = z.object({
    username: z
        .string()
        .min(3, "Full name must be at least 3 characters")
        .max(50, "Full name is too long"),

    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number is too long")
        .regex(/^[0-9+\-\s()]+$/, "Invalid phone number"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    service: z
        .string()
        .min(1, "Please select a service"),

    message: z
        .string()
        .min(10, "Message must be at least 10 characters")
        .max(1000, "Message is too long"),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;