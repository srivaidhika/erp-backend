export interface IInventory {

    itemCode:string;

    itemName:string;

    category:string;

    brand?:string;

    unit:string;

    quantity:number;

    purchasePrice:number;

    sellingPrice:number;

    minimumStock:number;

    warehouse?:string;

    description?:string;

}