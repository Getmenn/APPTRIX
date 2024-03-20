import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserSchema } from '../types/slice';

const initialState: UserSchema = {
    userName: null,
    email: null,
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string | null>) => {
            state.userName = action.payload;
        },
        setEmail: (state, action: PayloadAction<string | null>) => {
            state.email = action.payload;
        },
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
} = slice;
