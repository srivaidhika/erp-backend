import OrderRepository from "../repositories/OrderRepository";


class OrderService {


    async create(data:any){

        return OrderRepository.create(data);

    }



    async getAll(page:number, limit:number){

        return OrderRepository.getAll(
            page,
            limit
        );

    }



    async getById(id:number){

        return OrderRepository.getById(id);

    }



    async update(id:number,data:any){

        return OrderRepository.update(id,data);

    }



    async delete(id:number){

        return OrderRepository.delete(id);

    }
    async search(query:string){

        return OrderRepository.search(query);

    }


}


export default new OrderService();