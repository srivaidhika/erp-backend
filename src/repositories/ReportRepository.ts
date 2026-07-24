import prisma from "../database/prisma";


class ReportRepository {


    async dashboard(){

        const customers =
            await prisma.customer.count();


        const suppliers =
            await prisma.supplier.count();


        const inventory =
            await prisma.inventory.count();


        const orders =
            await prisma.order.count();


        const sales =
            await prisma.sale.aggregate({

                _sum:{
                    totalAmount:true
                }

            });


        const purchases =
            await prisma.purchase.aggregate({

                _sum:{
                    totalAmount:true
                }

            });



        return {

            totalCustomers:customers,

            totalSuppliers:suppliers,

            totalInventory:inventory,

            totalOrders:orders,

            totalSales:sales._sum.totalAmount || 0,

            totalPurchases:purchases._sum.totalAmount || 0

        };


    }


}


export default new ReportRepository();