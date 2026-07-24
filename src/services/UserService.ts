import bcrypt from "bcrypt";
import UserRepository from "../repositories/UserRepository";
import { IUser } from "../interfaces/IUser";

class UserService {

    async register(data: IUser) {

        const existingUser = await UserRepository.findByEmail(data.email);

        if (existingUser) {
            throw new Error("Email already exists");
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        data.password = hashedPassword;

        return UserRepository.createUser(data);
    }

}

export default new UserService();