import express from "express";
import PaymentController from "../controllers/PaymentController";


const router = express.Router();



router.post(
    "/",
    PaymentController.create
);



router.get(
    "/",
    PaymentController.getAll
);



router.get(
    "/:id",
    PaymentController.getById
);



export default router;