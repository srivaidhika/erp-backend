import prisma from "../database/prisma";
import { ICustomer } from "../interfaces/ICustomer";


class CustomerRepository {


    async createCustomer(data: ICustomer) {

        const customerCode =
            "CUS" + Date.now();


        return prisma.customer.create({

            data: {

                firstName: data.firstName,

                lastName: data.lastName,

                company: data.company,

                email: data.email,

                phone: data.phone,

                address: data.address,

                city: data.city,

                state: data.state,

                country: data.country,

                postalCode: data.postalCode,

                customerCode

            }

        });

    }



    async getAllCustomers(page:number = 1, limit:number = 10){

        return prisma.customer.findMany({

            skip:(page - 1) * limit,

            take:limit,

            orderBy:{
                createdAt:"desc"
            }

        });

    }



    async getCustomerById(id:number){

        return prisma.customer.findUnique({

            where:{
                id
            }

        });

    }



    async updateCustomer(id:number,data:any){

        return prisma.customer.update({

            where:{
                id
            },

            data

        });

    }



    async deleteCustomer(id:number){

        return prisma.customer.delete({

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
                    },

                    {
                        phone:{
                            contains:query
                        }
                    },

                    {
                        company:{
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