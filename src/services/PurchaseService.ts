import PurchaseRepository from "../repositories/PurchaseRepository";

class PurchaseService {

    async create(data: any) {

        return PurchaseRepository.create(data);

    }

    async getAll() {

        return PurchaseRepository.getAll();

    }

    async getById(id: number) {

        return PurchaseRepository.getById(id);

    }

}

export default new PurchaseService();