import {Router} from "express";
import CustomerController from "../controllers/CustomerController";
import {authenticate} from "../middlewares/auth.middleware";


const router=Router();


router.post(
    "/",
    authenticate,
    CustomerController.createCustomer
);


router.get(
    "/",
    authenticate,
    (req, res, next) => {

        console.log("CUSTOMER ROUTE REACHED");

        next();

    },
    CustomerController.getAllCustomers
);


router.get(
    "/search",
    authenticate,
    CustomerController.searchCustomer
);


router.get(
    "/:id",
    authenticate,
    CustomerController.getCustomerById
);


router.put(
    "/:id",
    authenticate,
    CustomerController.updateCustomer
);


router.delete(
    "/:id",
    authenticate,
    CustomerController.deleteCustomer
);



export default router;