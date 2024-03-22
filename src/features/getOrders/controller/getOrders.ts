import { IOrder } from "@/entities/check";
import { db } from "@/shared/lib/firebase/db";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

interface IProps{
    addOrder: ActionCreatorWithPayload<IOrder, "check/addOrder">;
}

export const getOrders = async ({addOrder}: IProps) => {
    const ordersColection = collection(db, 'orders');
    const activeOrders = await getDocs(ordersColection);
    
    activeOrders.forEach((el) => {
        addOrder({ ...el.data(), id: el.id } as IOrder)
    });
};