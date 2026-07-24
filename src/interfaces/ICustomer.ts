export interface ICustomer {
    id?: number;
    customerCode: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    gstNumber?: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
}