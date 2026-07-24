import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {

    async register(req: Request, res: Response) {
        try {

            const user = await UserService.register(req.body);

            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: user
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }
    }

}

export default new UserController();