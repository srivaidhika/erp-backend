import prisma from "../database/prisma";
import { IUser } from "../interfaces/IUser";

class UserRepository {

    async createUser(data: IUser) {
        return prisma.user.create({
            data
        });
    }

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: {
                email
            }
        });
    }

}

export default new UserRepository();