import { ActionCreatorWithPayload, Dispatch } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';

import { IOrder, checkActions } from '@/entities/check';
import { db } from '@/shared/lib/firebase/db';


export const getOrdersT = () => async (dispatch: Dispatch, getState: () => any) => { 
    try {
        const ordersColection = collection(db, 'orders');
        const activeOrders = await getDocs(ordersColection);

        activeOrders.forEach((el) => {
            dispatch(checkActions.addOrder({ ...el.data(), id: el.id } as IOrder))
        });
    } catch (error) {
        console.log('error getOrdersT');
    }
    
}

