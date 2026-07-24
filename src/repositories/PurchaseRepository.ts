import prisma from "../config/prisma";

class PurchaseRepository {

    async create(data: any) {

        return prisma.$transaction(async (tx: any) => {

            const purchase = await tx.purchase.create({

                data: {

                    purchaseNumber: data.purchaseNumber,

                    supplierId: data.supplierId,

                    inventoryId: data.inventoryId,

                    quantity: data.quantity,

                    purchasePrice: data.purchasePrice,

                    totalAmount: data.totalAmount,

                    status: data.status || "RECEIVED"

                }

            });

            await tx.inventory.update({

                where: {

                    id: data.inventoryId

                },

                data: {

                    quantity: {

                        increment: data.quantity

                    }

                }

            });

            return purchase;

        });

    }

    async getAll() {

        return prisma.purchase.findMany({

            include: {

                supplier: true,

                inventory: true

            }

        });

    }

    async getById(id: number) {

        return prisma.purchase.findUnique({

            where: {

                id

            },

            include: {

                supplier: true,

                inventory: true

            }

        });

    }

}

export default new PurchaseRepository();