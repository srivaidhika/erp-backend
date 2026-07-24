import { z } from "zod";


export const salesSchema = z.object({

    saleNumber: z.string(),

    orderId: z.number(),

    customerId: z.number(),

    totalAmount: z.number().positive()

});