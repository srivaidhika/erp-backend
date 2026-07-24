import { z } from "zod";


export const customerSchema = z.object({

    firstName:z.string()
        .min(2,"First name required"),

    lastName:z.string()
        .min(2,"Last name required"),

    company:z.string()
        .min(2,"Company name required"),

    email:z.string()
        .email("Invalid email"),

    phone:z.string()
        .min(10,"Invalid phone"),

    address:z.string()
        .min(5,"Address required")

});