import { IProduct } from '@/entities/products';

export interface ICheck{
    id: string;
    count: number;
    idCheck: string;
}

export interface IProductsCount extends IProduct {
    count: number
}

export interface IOrder{
    id: string;
    addres: string;
    products: IProductsCount[];
    typePay: 'Cash' | 'Card';
}

export interface CheckSchema {
    checks: ICheck[];
    checkList: IProductsCount[];
    loadingCheckList: boolean;
    orders: IOrder[];
    checkSum: string;
}
