import {Request,Response} from "express";
import DashboardService from "../services/DashboardService";


class DashboardController{


    async getDashboard(
        req:Request,
        res:Response
    ){


        try{


            const data =
                await DashboardService.getDashboard();



            return res.json({

                success:true,

                data

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


export default new DashboardController();