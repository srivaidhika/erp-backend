import { Request, Response } from "express";
import CustomerService from "../services/CustomerService";

class CustomerController {

    async createCustomer(req: Request, res: Response) {

        try {

            console.log("CUSTOMER BODY:", req.body);

            const customer =
                await CustomerService.createCustomer(req.body);

            return res.status(201).json({
                success: true,
                data: customer
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

    async getAllCustomers(req: Request, res: Response) {

        console.log("========== CUSTOMER API ==========");
        console.log("Customer controller reached");

        try {

            const page = Number(req.query.page) || 1;
            const limit = Number(req.query.limit) || 10;

            console.log("Page:", page);
            console.log("Limit:", limit);

            const customers =
                await CustomerService.getAllCustomers(page, limit);

            console.log("Customers:", customers);

            return res.status(200).json({
                success: true,
                page,
                limit,
                data: customers
            });

        } catch (error: any) {

            console.error("Customer Error");
            console.error(error);

            return res.status(500).json({
                success: false,
                message: error.message,
                stack: error.stack
            });

        }
    }

    async getCustomerById(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const customer =
                await CustomerService.getCustomerById(id);

            if (!customer) {

                return res.status(404).json({
                    success: false,
                    message: "Customer not found"
                });

            }

            return res.json({
                success: true,
                data: customer
            });

        } catch (error: any) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

    async updateCustomer(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            const customer =
                await CustomerService.updateCustomer(
                    id,
                    req.body
                );

            return res.json({
                success: true,
                data: customer
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

    async deleteCustomer(req: Request, res: Response) {

        try {

            const id = Number(req.params.id);

            await CustomerService.deleteCustomer(id);

            return res.json({
                success: true,
                message: "Customer deleted successfully"
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

    async searchCustomer(req: Request, res: Response) {

        try {

            const query = String(req.query.query);

            const customers =
                await CustomerService.searchCustomer(query);

            return res.json({
                success: true,
                data: customers
            });

        } catch (error: any) {

            return res.status(500).json({
                success: false,
                message: error.message
            });

        }
    }

}

export default new CustomerController();