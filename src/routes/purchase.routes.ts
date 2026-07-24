import { Router } from "express";
import PurchaseController from "../controllers/PurchaseController";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    PurchaseController.create
);

router.get(
    "/",
    authenticate,
    PurchaseController.getAll
);

router.get(
    "/:id",
    authenticate,
    PurchaseController.getById
);

export default router;