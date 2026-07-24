import { Router } from "express";
import SalesController from "../controllers/SalesController";
import { authenticate } from "../middlewares/auth.middleware";
import { authorize } from "../middlewares/authorize";

const router = Router();

router.post(
    "/",
    authenticate,
    authorize("ADMIN", "SALES"),
    SalesController.create
);

router.get("/", authenticate, SalesController.getAll);

router.get("/:id", authenticate, SalesController.getById);

export default router;