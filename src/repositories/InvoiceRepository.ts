import prisma from "../database/prisma";

class InvoiceRepository {

    async create(data: any) {

        return prisma.invoice.create({
            data
        });

    }

    async getAll() {

        return prisma.invoice.findMany({

            include: {
                order: true
            },

            orderBy: {
                createdAt: "desc"
            }

        });

    }

    async getById(id: number) {

        return prisma.invoice.findUnique({

            where: {
                id
            },

            include: {
                order: true
            }

        });

    }

}

export default new InvoiceRepository();