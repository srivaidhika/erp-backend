import prisma from "../database/prisma";
import { ISupplier } from "../interfaces/ISupplier";

class SupplierRepository {

    async create(data: ISupplier) {
        return prisma.supplier.create({
            data
        });
    }

    async getAll(page:number = 1, limit:number = 10){

        return prisma.supplier.findMany({

            skip:(page - 1) * limit,

            take:limit,

            orderBy:{
                createdAt:"desc"
            }

        });

    }

    async getById(id: number) {
        return prisma.supplier.findUnique({
            where: { id }
        });
    }

    async update(id: number, data: Partial<ISupplier>) {
        return prisma.supplier.update({
            where: { id },
            data
        });
    }

    async delete(id: number) {
        return prisma.supplier.delete({
            where: { id }
        });
    }

    async findByEmail(email: string) {
        return prisma.supplier.findUnique({
            where: { email }
        });
    }

    async findByPhone(phone: string) {
        return prisma.supplier.findUnique({
            where: { phone }
        });
    }
    async search(query:string){

        return prisma.supplier.findMany({

            where:{
                OR:[

                    {
                        supplierCode:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },

                    {
                        contactPerson:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },

                    {
                        companyName:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },

                    {
                        email:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },

                    {
                        phone:{
                            contains:query,
                            mode:"insensitive"
                        }
                    }

                ]
            }

        });

    }
}

export default new SupplierRepository();