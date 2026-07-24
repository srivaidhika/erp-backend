import InvoiceRepository from "../repositories/InvoiceRepository";

class InvoiceService {

    async create(data: any) {

        return InvoiceRepository.create(data);

    }

    async getAll() {

        return InvoiceRepository.getAll();

    }

    async getById(id: number) {

        return InvoiceRepository.getById(id);

    }

}

export default new InvoiceService();