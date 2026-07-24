import { Request, Response } from "express";
import InvoiceService from "../services/InvoiceService";

class InvoiceController {

    async create(req: Request, res: Response) {

        try {

            const invoice = await InvoiceService.create(req.body);

            return res.status(201).json({

                success: true,
                data: invoice

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

            const invoices = await InvoiceService.getAll();

            return res.json({

                success: true,
                data: invoices

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

        const invoice = await InvoiceService.getById(id);

        if (!invoice) {

            return res.status(404).json({

                success: false,
                message: "Invoice Not Found"

            });

        }

        return res.json({

            success: true,
            data: invoice

        });

    }

}

export default new InvoiceController();