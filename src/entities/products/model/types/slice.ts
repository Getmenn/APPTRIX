interface langObj{
    ru: string;
    en: string;
}

export interface IProduct{
    id: string;
    name: langObj;
    price: langObj;
    image: string;
}

export interface ICheck{
    id: string;
    count: number;
}

export interface ProductsSchema {
    products: IProduct[];
    checks: ICheck[];
}


