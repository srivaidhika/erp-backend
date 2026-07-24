import { z } from "zod";

export const inventorySchema = z.object({

    itemCode: z.string(),

    itemName: z.string().min(3),

    category: z.string(),

    brand: z.string().optional(),

    unit: z.string(),

    quantity: z.number(),

    purchasePrice: z.number(),

    sellingPrice: z.number(),

    minimumStock: z.number(),

    warehouse: z.string().optional(),

    description: z.string().optional()

});