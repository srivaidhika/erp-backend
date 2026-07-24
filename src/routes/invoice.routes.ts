import { Router } from "express";
import InvoiceController from "../controllers/InvoiceController";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    InvoiceController.create
);

router.get(
    "/",
    authenticate,
    InvoiceController.getAll
);

router.get(
    "/:id",
    authenticate,
    InvoiceController.getById
);

export default router;