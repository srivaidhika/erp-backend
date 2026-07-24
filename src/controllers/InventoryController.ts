import { Request, Response } from "express";
import InventoryService from "../services/InventoryService";
import { inventorySchema } from "../validators/inventory.validator";

class InventoryController {

    async create(req: Request, res: Response) {

        try {

            console.log("Request Body:", req.body);

            const itemCode = "ITM" + Date.now();

            const body =
                inventorySchema.parse({
                    ...req.body,
                    itemCode
                });

            const inventory =
                await InventoryService.create(body);

            return res.status(201).json({
                success: true,
                message: "Inventory Item Created Successfully",
                data: inventory
            });

        } catch (error: any) {

            console.error(error);

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

    async getAll(req: Request, res: Response) {

        console.log("========== INVENTORY API ==========");

        try {

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            console.log("Page:", page);
            console.log("Limit:", limit);

            const inventory =
                await InventoryService.getAll(page, limit);

            console.log("Inventory:", inventory);

            return res.status(200).json({
                success: true,
                page,
                limit,
                data: inventory
            });

        } catch (error: any) {

            console.error(error);

            return res.status(500).json({
                success: false,
                message: error.message,
                stack: error.stack
            });

        }
    }

    async getById(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const inventory =
                await InventoryService.getById(id);

            if (!inventory) {

                return res.status(404).json({
                    success: false,
                    message: "Inventory Item Not Found"
                });

            }

            return res.status(200).json({
                success: true,
                data: inventory
            });

        } catch (error: any) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    async update(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const inventory =
                await InventoryService.update(
                    id,
                    req.body
                );

            return res.status(200).json({
                success: true,
                data: inventory
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

    async delete(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            await InventoryService.delete(id);

            return res.status(200).json({
                success: true,
                message: "Inventory deleted successfully"
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

    async searchInventory(req: Request, res: Response) {

        try {

            const query = String(req.query.query);

            const inventory =
                await InventoryService.searchInventory(query);

            return res.json({
                success: true,
                data: inventory
            });

        } catch (error: any) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    async lowStock(req: Request, res: Response) {

        try {

            const inventory =
                await InventoryService.lowStock();

            return res.status(200).json({
                success: true,
                data: inventory
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

}

export default new InventoryController();