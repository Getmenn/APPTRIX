import { IOrder } from "@/entities/check";
import { IProduct } from "@/entities/products";
import { db } from "@/shared/lib/firebase/db";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

interface IProps{
    addProduct: ActionCreatorWithPayload<IProduct, "products/addProduct">;
}

export const getProducts = async ({addProduct}: IProps) => {
    const menuColection = collection(db, 'menu');

    const menu = await getDocs(menuColection);
    menu.forEach((el) => {
        addProduct({ ...el.data(), id: el.id } as IProduct)
    });
};