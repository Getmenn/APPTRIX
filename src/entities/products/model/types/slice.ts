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

export interface ProductsSchema {
    products: IProduct[];
}


