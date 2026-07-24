import { Router } from "express";

import InventoryController from "../controllers/InventoryController";

import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.post(
    "/",
    authenticate,
    InventoryController.create
);

router.get(
    "/",
    authenticate,
    (req, res, next) => {

        console.log("INVENTORY ROUTE REACHED");

        next();

    },
    InventoryController.getAll
);
router.get(
    "/search",
    authenticate,
    InventoryController.searchInventory
);
router.get(
    "/low-stock",
    authenticate,
    InventoryController.lowStock
);
router.get(
    "/:id",
    authenticate,
    InventoryController.getById
);
router.put(
    "/:id",
    authenticate,
    InventoryController.update
);
router.delete(
    "/:id",
    authenticate,
    InventoryController.delete
);


export default router;