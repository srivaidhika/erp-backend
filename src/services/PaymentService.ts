import PaymentRepository from "../repositories/PaymentRepository";


class PaymentService {



    async create(data:any){


        return PaymentRepository.create({

            orderId:data.orderId,

            paymentMethod:data.paymentMethod,

            paymentStatus:"SUCCESS",

            transactionId:
                "TXN"+Date.now()

        });


    }




    async getAll(){


        return PaymentRepository.getAll();


    }




    async getById(id:number){


        return PaymentRepository.getById(id);


    }



}


export default new PaymentService();