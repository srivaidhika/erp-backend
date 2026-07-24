import {Request,Response,NextFunction} from "express";


export const errorMiddleware = (
    req:Request,
    res:Response,
    next:NextFunction
)=>{

    try{

        next();

    }
    catch(error:any){

        res.status(500).json({

            success:false,

            message:error.message

        });

    }

};