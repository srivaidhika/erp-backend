import prisma from "../config/prisma";

class SalesRepository {

    async create(data: any) {

        return prisma.sale.create({
            data: {
                saleNumber: data.saleNumber,
                orderId: data.orderId,
                customerId: data.customerId,
                totalAmount: data.totalAmount
            }
        });

    }

    async getAll() {

        return prisma.sale.findMany({
            include: {
                customer: true,
                order: {
                    include: {
                        items: true
                    }
                }
            }
        });

    }

    async getById(id: number) {

        return prisma.sale.findUnique({
            where: {
                id
            },
            include: {
                customer: true,
                order: {
                    include: {
                        items: true
                    }
                }
            }
        });

    }

}

export default new SalesRepository();