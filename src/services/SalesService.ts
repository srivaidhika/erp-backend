import SalesRepository from "../repositories/SalesRepository";

class SalesService {

    async create(data:any){

        return SalesRepository.create({

            saleNumber:data.saleNumber,

            orderId:data.orderId,

            customerId:data.customerId,

            totalAmount:data.totalAmount,

        });

    }

    async getAll() {

        return SalesRepository.getAll();

    }

    async getById(id: number) {

        return SalesRepository.getById(id);

    }

}

export default new SalesService();