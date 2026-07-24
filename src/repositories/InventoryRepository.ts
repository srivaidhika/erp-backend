import prisma from "../database/prisma";
import { IInventory } from "../interfaces/IInventory";

class InventoryRepository {

    async create(data: IInventory) {
        return prisma.inventory.create({
            data
        });
    }

    async getAll(page:number = 1, limit:number = 10){

        return prisma.inventory.findMany({

            skip:(page - 1) * limit,

            take:limit,

            orderBy:{
                createdAt:"desc"
            }

        });

    }

    async getById(id: number) {
        return prisma.inventory.findUnique({
            where: {
                id
            }
        });
    }

    async update(id: number, data: any) {
        return prisma.inventory.update({
            where: {
                id
            },
            data
        });
    }

    async delete(id: number) {
        return prisma.inventory.delete({
            where: {
                id
            }
        });
    }
    async search(query:string){

        return prisma.inventory.findMany({

            where:{
                OR:[
                    {
                        itemName:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        itemCode:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        brand:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        category:{
                            contains:query,
                            mode:"insensitive"
                        }
                    }
                ]
            }

        });

    }
    async lowStock(){

        return prisma.inventory.findMany({

            where:{
                quantity:{
                    lte: prisma.inventory.fields.minimumStock
                }
            }

        });

    }

}

export default new InventoryRepository();