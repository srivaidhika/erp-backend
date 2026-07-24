import prisma from "../config/prisma";


class CustomerRepository {


    async createCustomer(data:any){

        return prisma.customer.create({
            data
        });

    }


    async getAllCustomers(){

        return prisma.customer.findMany();

    }


    async getCustomerById(id:number){

        return prisma.customer.findUnique({
            where:{
                id
            }
        });

    }


    async searchCustomer(query:string){

        return prisma.customer.findMany({

            where:{
                OR:[
                    {
                        firstName:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        lastName:{
                            contains:query,
                            mode:"insensitive"
                        }
                    },
                    {
                        email:{
                            contains:query,
                            mode:"insensitive"
                        }
                    }
                ]
            }

        });

    }


}


export default new CustomerRepository();