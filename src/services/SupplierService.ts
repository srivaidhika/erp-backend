import SupplierRepository from "../repositories/SupplierRepository";
import { ISupplier } from "../interfaces/ISupplier";

class SupplierService {

    async create(data: ISupplier) {

        const emailExists = await SupplierRepository.findByEmail(data.email);

        if (emailExists) {
            throw new Error("Supplier email already exists");
        }

        const phoneExists = await SupplierRepository.findByPhone(data.phone);

        if (phoneExists) {
            throw new Error("Supplier phone already exists");
        }

        return SupplierRepository.create(data);
    }

    async getAll(page:number, limit:number){

        return SupplierRepository.getAll(
            page,
            limit
        );

    }

    async getById(id: number) {
        return SupplierRepository.getById(id);
    }

    async update(id: number, data: Partial<ISupplier>) {
        return SupplierRepository.update(id, data);
    }

    async delete(id: number) {
        return SupplierRepository.delete(id);
    }
    async search(query:string){

        return SupplierRepository.search(query);

    }
}

export default new SupplierService();