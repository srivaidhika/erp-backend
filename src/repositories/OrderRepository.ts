import prisma from "../database/prisma";


class OrderRepository {


    async create(data:any){


        const orderNumber =
            "ORD" + Date.now();



        return prisma.order.create({

            data:{
                ...data,

                orderNumber

            },


            include:{
                items:true,
                customer:true
            }

        });

    }



    async getAll(page:number = 1, limit:number = 10){

        return prisma.order.findMany({

            skip:(page - 1) * limit,

            take:limit,

            orderBy:{
                createdAt:"desc"
            },

            include:{
                customer:true,
                items:true
            }

        });

    }



    async getById(id:number){

        return prisma.order.findUnique({

            where:{
                id
            },

            include:{
                customer:true,
                items:true,
                payment:true
            }

        });

    }



    async update(id:number,data:any){

        return prisma.order.update({

            where:{
                id
            },

            data

        });

    }



    async delete(id:number){

        return prisma.order.delete({

            where:{
                id
            }

        });

    }
    async search(query:string){

        return prisma.order.findMany({

            where:{
                OR:[
                    {
                        orderNumber:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        status:{
                            contains:query,
                            mode:"insensitive"
                        }
                    }
                ]
            },

            include:{
                customer:true,
                items:true
            }

        });

    }


}


export default new OrderRepository();