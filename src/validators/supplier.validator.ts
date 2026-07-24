import {z} from "zod";


export const supplierSchema = z.object({

    supplierCode:z.string(),

    companyName:z.string(),

    contactPerson:z.string(),

    email:z.string().email(),

    phone:z.string(),

    address:z.string(),

    city:z.string(),

    state:z.string(),

    country:z.string(),

    postalCode:z.string(),

    gstNumber:z.string().optional()

});