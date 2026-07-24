import { Router } from "express";
import SupplierController from "../controllers/SupplierController";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post("/", authenticate, SupplierController.create);
router.get("/", authenticate, SupplierController.getAll);
router.get(
    "/search",
    SupplierController.search
);
router.get("/:id", authenticate, SupplierController.getById);
router.put("/:id", authenticate, SupplierController.update);
router.delete("/:id", authenticate, SupplierController.delete);


export default router;