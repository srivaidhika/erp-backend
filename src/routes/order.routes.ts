import {Router} from "express";

import OrderController from "../controllers/OrderController";

import {authenticate} from "../middlewares/auth.middleware";


const router=Router();



router.post(
    "/",
    authenticate,
    OrderController.create
);



router.get(
    "/",
    authenticate,
    OrderController.getAll
);
router.get(
    "/search",
    OrderController.search
);



router.get(
    "/:id",
    authenticate,
    OrderController.getById
);



router.put(
    "/:id",
    authenticate,
    OrderController.update
);



router.delete(
    "/:id",
    authenticate,
    OrderController.delete
);



export default router;