import { ActionCreatorWithPayload, Dispatch } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';

import { IProduct, productsActions } from '@/entities/products';
import { db } from '@/shared/lib/firebase/db';

export const getProductsT = () => async (dispatch: Dispatch, getState: () => any) => {
    try {
        dispatch(productsActions.setProductLoading(true))
        dispatch(productsActions.setProductsError(false))

        const menuColection = collection(db, 'menu');

        const menu = await getDocs(menuColection);
        menu.forEach((el) => {
            dispatch(productsActions.addProduct({ ...el.data(), id: el.id } as IProduct))
        });
    } catch (error) {
        dispatch(productsActions.setProductsError(true))
    }
    finally {
        dispatch(productsActions.setProductLoading(false))
    }
}
