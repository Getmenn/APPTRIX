import { ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';

import { testReducer } from '@/entities/auth';
import { userReducer } from '@/entities/user';

import { createReduxStore } from '../config/createReduxStore';

export const StoreProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        testReducer,
        userReducer,
    };

    const store = useMemo(() => createReduxStore<StateSchema>(rootReducers), []);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
