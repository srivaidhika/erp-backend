export interface IOrder {

    orderNumber:string;

    customerId:number;

    totalAmount:number;

    status?:string;

    items:{
        inventoryId:number;
        quantity:number;
        price:number;
    }[];

}