import prisma from "../database/prisma";


class DashboardRepository {


    async getDashboardData(){


        const totalCustomers =
            await prisma.customer.count();



        const totalInventory =
            await prisma.inventory.count();



        const totalOrders =
            await prisma.order.count();



        const sales =
            await prisma.order.aggregate({

                _sum:{
                    totalAmount:true
                }

            });



        const lowStockItems =
            await prisma.inventory.count({

                where:{
                    quantity:{
                        lte: prisma.inventory.fields.minimumStock
                    }
                }

            });



        return {

            totalCustomers,

            totalInventory,

            totalOrders,

            totalSales:
                sales._sum.totalAmount || 0,

            lowStockItems

        };


    }


}


export default new DashboardRepository();