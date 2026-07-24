import prisma from "../database/prisma";

class AuthRepository {

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email }
        });
    }

}

export default new AuthRepository();