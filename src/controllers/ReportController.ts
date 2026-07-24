import {Request,Response} from "express";
import ReportService from "../services/ReportService";


class ReportController {


    async dashboard(req:Request,res:Response){


        try{


            const data =
                await ReportService.dashboard();



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


export default new ReportController();