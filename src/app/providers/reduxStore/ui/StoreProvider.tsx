import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';

import { checkReducer } from '@/entities/check';
import { productsReducer } from '@/entities/products';

import { createReduxStore } from '../config/createReduxStore';

export const StoreProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        productsReducer,
        checkReducer,
    };

    const store = useMemo(() => createReduxStore<StateSchema>(rootReducers), []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
