import { z } from "zod";

export const registerSchema = z.object({
    fullName: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    phone: z.string().min(10).max(15),
    role: z.enum(["ADMIN", "MANAGER", "EMPLOYEE"])
});