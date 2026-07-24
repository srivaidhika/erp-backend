import InventoryRepository from "../repositories/InventoryRepository";
import { IInventory } from "../interfaces/IInventory";

class InventoryService {

    async create(data: IInventory) {
        return InventoryRepository.create(data);
    }

    async getAll(page:number, limit:number){

        return InventoryRepository.getAll(
            page,
            limit
        );

    }

    async getById(id: number) {
        return InventoryRepository.getById(id);
    }

    async update(id: number, data: any) {
        return InventoryRepository.update(id, data);
    }

    async delete(id: number) {
        return InventoryRepository.delete(id);
    }
    async searchInventory(query:string){

        return InventoryRepository.search(query);

    }
    async lowStock(){

        return InventoryRepository.lowStock();

    }
}

export default new InventoryService();