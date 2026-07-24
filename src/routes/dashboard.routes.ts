import express from "express";
import DashboardController from "../controllers/DashboardController";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize";

const router = express.Router();

router.get(
    "/",
    authenticate,
    authorize("ADMIN", "ACCOUNTS"),
    DashboardController.getDashboard
);

export default router;