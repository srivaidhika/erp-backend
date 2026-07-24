import {Router} from "express";
import ReportController from "../controllers/ReportController";


const router = Router();


router.get(
    "/dashboard",
    ReportController.dashboard
);


export default router;