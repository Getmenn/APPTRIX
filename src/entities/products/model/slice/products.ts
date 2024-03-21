import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICheck, IProduct, ProductsSchema } from '../types/slice';

const initialState: ProductsSchema = {
    products: [],
    checks: []
};

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload];
        },
        addCheck: (state, action: PayloadAction<ICheck>) => {
            state.checks = [...state.checks, action.payload];
        },
    },
});

export const {
    actions: productsActions,
    reducer: productsReducer,
} = slice;
