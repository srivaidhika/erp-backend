import {Request,Response} from "express";
import PaymentService from "../services/PaymentService";


class PaymentController {



    async create(req:Request,res:Response){


        try{


            const payment =
                await PaymentService.create(req.body);



            return res.status(201).json({

                success:true,

                data:payment

            });


        }

        catch(error:any){


            return res.status(400).json({

                success:false,

                message:error.message

            });


        }



    }




    async getAll(req:Request,res:Response){


        try{


            const payments =
                await PaymentService.getAll();



            return res.json({

                success:true,

                data:payments

            });


        }

        catch(error:any){


            return res.status(500).json({

                success:false,

                message:error.message

            });


        }



    }




    async getById(req:Request,res:Response){


        try{


            const id =
                Number(req.params.id);



            const payment =
                await PaymentService.getById(id);



            if(!payment){


                return res.status(404).json({

                    success:false,

                    message:"Payment not found"

                });


            }



            return res.json({

                success:true,

                data:payment

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



export default new PaymentController();