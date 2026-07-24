import prisma from "../database/prisma";


class PaymentRepository {


    async create(data:any){

        return prisma.payment.create({

            data

        });

    }



    async getAll(){

        return prisma.payment.findMany({

            include:{
                order:true
            },

            orderBy:{
                createdAt:"desc"
            }

        });

    }




    async getById(id:number){

        return prisma.payment.findUnique({

            where:{
                id
            },

            include:{
                order:true
            }

        });

    }



}


export default new PaymentRepository();