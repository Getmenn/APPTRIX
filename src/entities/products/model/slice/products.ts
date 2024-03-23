import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, ProductsSchema } from '../types/slice';

const initialState: ProductsSchema = {
    products: [],
    productsLoading: false,
    productsError: false,
};

const slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = [...state.products, action.payload];
        },
        setProductLoading: (state, action: PayloadAction<boolean>) => {
            state.productsLoading = action.payload;
        },
        setProductsError: (state, action: PayloadAction<boolean>) => {
            state.productsError = action.payload;
        },
    },
});

export const {
    actions: productsActions,
    reducer: productsReducer,
} = slice;
