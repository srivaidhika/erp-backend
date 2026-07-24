import CustomerRepository from "../repositories/CustomerRepository";


class CustomerService {


    async createCustomer(data:any){

        const emailExist =
            await CustomerRepository.getAllCustomers();


        return CustomerRepository.createCustomer(data);

    }



    async getAllCustomers(page:number,limit:number){

        return CustomerRepository.getAllCustomers(page,limit);

    }



    async getCustomerById(id:number){

        return CustomerRepository.getCustomerById(id);

    }



    async updateCustomer(id:number,data:any){

        return CustomerRepository.updateCustomer(id,data);

    }



    async deleteCustomer(id:number){

        return CustomerRepository.deleteCustomer(id);

    }



    async searchCustomer(query:string){

        return CustomerRepository.searchCustomer(query);

    }


}


export default new CustomerService();