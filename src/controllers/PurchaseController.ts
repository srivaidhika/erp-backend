import { Request, Response } from "express";
import PurchaseService from "../services/PurchaseService";
import { purchaseSchema } from "../validators/purchase.validator";


class PurchaseController {

    async create(req: Request, res: Response) {

        try {

            const body =
                purchaseSchema.parse(req.body);


            const purchase =
                await PurchaseService.create(body);

            return res.status(201).json({

                success: true,

                data: purchase

            });

        }

        catch (error: any) {

            return res.status(400).json({

                success: false,

                message: error.message

            });

        }

    }

    async getAll(req: Request, res: Response) {

        try {

            const purchases = await PurchaseService.getAll();

            return res.json({

                success: true,

                data: purchases

            });

        }

        catch (error: any) {

            return res.status(500).json({

                success: false,

                message: error.message

            });

        }

    }

    async getById(req: Request, res: Response) {

        const id = Number(req.params.id);

        const purchase = await PurchaseService.getById(id);

        if (!purchase) {

            return res.status(404).json({

                success: false,

                message: "Purchase not found"

            });

        }

        return res.json({

            success: true,

            data: purchase

        });

    }

}

export default new PurchaseController();