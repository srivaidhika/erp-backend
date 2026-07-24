import { Request, Response } from "express";
import SupplierService from "../services/SupplierService";
import { supplierSchema } from "../validators/supplier.validator";

class SupplierController {

    async create(req: Request, res: Response) {
        try {
            const body = supplierSchema.parse(req.body);


            const supplier =
                await SupplierService.create(body);

            return res.status(201).json({
                success: true,
                data: supplier
            });

        } catch (error: any) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
    }

    async getAll(req:Request,res:Response){

        try{

            const page =
                Number(req.query.page) || 1;


            const limit =
                Number(req.query.limit) || 10;



            const suppliers =
                await SupplierService.getAll(
                    page,
                    limit
                );


            return res.status(200).json({

                success:true,

                page:page,

                limit:limit,

                data:suppliers

            });


        }
        catch(error:any){

            return res.status(500).json({

                success:false,

                message:error.message

            });

        }

    }

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            const supplier = await SupplierService.getById(id);

            if (!supplier) {
                return res.status(404).json({
                    success: false,
                    message: "Supplier not found"
                });
            }

            return res.json({
                success: true,
                data: supplier
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

            const supplier = await SupplierService.update(id, req.body);

            return res.json({
                success: true,
                data: supplier
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

            await SupplierService.delete(id);

            return res.json({
                success: true,
                message: "Supplier deleted successfully"
            });

        } catch (error: any) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

    }
    async search(req:Request,res:Response){

        try{

            const query =
                String(req.query.query);


            const suppliers =
                await SupplierService.search(query);


            return res.json({

                success:true,
                data:suppliers

            });


        }
        catch(error:any){

            return res.status(500).json({

                success:false,
                message:error.message

            });

        }

    }
}

export default new SupplierController();