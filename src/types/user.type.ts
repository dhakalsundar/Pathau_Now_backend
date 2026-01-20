import z from "zod";

export const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    phoneNumber: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    role: z.enum(["user", "admin"]).default("user"),
});

export type UserType = z.infer<typeof UserSchema>;