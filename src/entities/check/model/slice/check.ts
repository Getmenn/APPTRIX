import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICheck, CheckSchema, IProductsCount, IOrder } from '../types/slice';

const initialState: CheckSchema = {
    checks: [],
    checkList: [],
    loadingCheckList: false,
    orders: [],
    checkSum: '0',
};

const slice = createSlice({
    name: 'check',
    initialState,
    reducers: {
        // товары в корзине
        addCheck: (state, action: PayloadAction<ICheck>) => {
            state.checks = [...state.checks, action.payload];
        },
        setChecks: (state, action: PayloadAction<ICheck[]>) => {
            state.checks = action.payload;
        },

        // сумма в чеке
        setCheckSum: (state, action: PayloadAction<string>) => {
            state.checkSum = action.payload;
        }, 
        
        // список чеков
        setCheckList: (state, action: PayloadAction<IProductsCount[]>) => {
            state.checkList = action.payload;
        },
        uppdateCountCheck: (state, action: PayloadAction<IProductsCount>) => {
            state.checkList = state.checkList.map(el => {
                if(el.id === action.payload.id){
                    return {...el, count: action.payload.count}
                }else{
                    return el
                }
            })
        },
        loadingCheckList: (state, action: PayloadAction<boolean>) => {
            state.loadingCheckList = action.payload;
        },


        //orders
        addOrder: (state, action: PayloadAction<IOrder>) => {
            state.orders = [...state.orders, action.payload];
        },
        clearOrder: (state, ) => {
            state.orders = [];
        },
        deleteOrder: (state, action: PayloadAction<string>) => {
            state.orders = state.orders.filter(el => el.id !== action.payload);
        },
    },
});

export const {
    actions: checkActions,
    reducer: checkReducer,
} = slice;
