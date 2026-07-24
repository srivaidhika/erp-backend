import { Request, Response } from "express";
import SalesService from "../services/SalesService";
import { salesSchema } from "../validators/sales.validator";

class SalesController {

    async create(req: Request, res: Response) {

        try {

            const body =
                salesSchema.parse(req.body);


            const sale =
                await SalesService.create(body);

            return res.status(201).json({

                success: true,
                data: sale

            });

        } catch (error: any) {

            return res.status(400).json({

                success: false,
                message: error.message

            });

        }

    }

    async getAll(req: Request, res: Response) {

        console.log("========== SALES API ==========");

        try {

            const sales =
                await SalesService.getAll();

            console.log(sales);

            return res.status(200).json({
                success: true,
                data: sales
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

        const id = Number(req.params.id);

        const sale = await SalesService.getById(id);

        if (!sale) {

            return res.status(404).json({

                success: false,
                message: "Sale not found"

            });

        }

        return res.json({

            success: true,
            data: sale

        });

    }

}

export default new SalesController();