import { z } from "zod";


export const orderSchema = z.object({

    customerId:z.number(),

    totalAmount:z.number()
        .positive(),

    status:z.string()

});