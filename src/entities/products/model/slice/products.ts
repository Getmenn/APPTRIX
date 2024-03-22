import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, ProductsSchema } from '../types/slice';

const initialState: ProductsSchema = {
    products: [],
};

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload];
        },
    },
});

export const {
    actions: productsActions,
    reducer: productsReducer,
} = slice;
