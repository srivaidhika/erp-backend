import { Request, Response } from "express";
import OrderService from "../services/OrderService";
import { orderSchema } from "../validators/order.validator";

class OrderController {



    async create(req: Request, res: Response) {


        try {


            const body =
                orderSchema.parse(req.body);


            const order =
                await OrderService.create(body);



            return res.status(201).json({

                success: true,

                data: order

            });



        }
        catch (error: any) {


            return res.status(400).json({

                success: false,

                message: error.message

            });


        }


    }





    // Pagination added here
    async getAll(req: Request, res: Response) {


        try {


            const page =
                Number(req.query.page) || 1;


            const limit =
                Number(req.query.limit) || 10;



            const orders =
                await OrderService.getAll(
                    page,
                    limit
                );



            return res.status(200).json({


                success: true,

                page: page,

                limit: limit,

                data: orders


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


        try {


            const id =
                Number(req.params.id);



            const order =
                await OrderService.getById(id);



            if (!order) {


                return res.status(404).json({


                    success: false,


                    message:
                        "Order not found"


                });


            }




            return res.json({


                success: true,


                data: order


            });



        }
        catch(error:any){


            return res.status(500).json({


                success:false,

                message:error.message


            });


        }


    }







    async update(req: Request, res: Response) {


        try {


            const id =
                Number(req.params.id);



            const order =
                await OrderService.update(

                    id,

                    req.body

                );



            return res.json({


                success:true,


                data:order


            });



        }
        catch(error:any){


            return res.status(400).json({


                success:false,


                message:error.message


            });


        }


    }







    async delete(req: Request, res: Response) {


        try {


            const id =
                Number(req.params.id);



            await OrderService.delete(id);



            return res.json({


                success:true,


                message:
                    "Order deleted successfully"


            });



        }
        catch(error:any){


            return res.status(400).json({


                success:false,


                message:error.message


            });


        }


    }







    async search(req: Request, res: Response) {


        try {


            const query =
                String(req.query.query);



            const orders =
                await OrderService.search(query);



            return res.json({


                success:true,


                data:orders


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


export default new OrderController();