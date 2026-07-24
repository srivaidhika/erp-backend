export interface IUser {
    id?: number;
    fullName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}