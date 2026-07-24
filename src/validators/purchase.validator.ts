import { z } from "zod";


export const purchaseSchema = z.object({

    purchaseNumber:z.string(),

    supplierId:z.number(),

    inventoryId:z.number(),

    quantity:z.number()
        .positive(),

    purchasePrice:z.number()
        .positive(),

    totalAmount:z.number()
        .positive()

});