import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthRepository from "../repositories/AuthRepository";

class AuthService {

    async login(email: string, password: string) {

        console.log("=================================");
        console.log("Email received:", email);
        console.log("Password received:", password);

        const user = await AuthRepository.findByEmail(email);

        console.log("User from database:", user);

        if (!user) {
            throw new Error("Invalid Email or Password");
        }

        console.log("Stored password hash:", user.password);

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password.trim()
        );

        console.log("Password matched:", isPasswordValid);
        if (!isPasswordValid) {
            throw new Error("Invalid Email or Password");
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "1d"
            }
        );

        return {
            token,
            user: {
                id: user.id,
                name:user.fullName,

                email: user.email,
                role: user.role
            }
        };
    }

}

export default new AuthService();