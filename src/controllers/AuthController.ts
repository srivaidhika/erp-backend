import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { loginSchema } from "../validators/auth.validator";


class AuthController {

    async login(req: Request, res: Response) {

        try {

            const data = loginSchema.parse(req.body);

            const result = await AuthService.login(
                data.email,
                data.password
            );

            return res.status(200).json({
                success: true,
                message: "Login Successful",

                data: result
            });

        } catch (error: any) {

            return res.status(400).json({
                success: false,
                message: error.message
            });

        }

    }

}

export default new AuthController();