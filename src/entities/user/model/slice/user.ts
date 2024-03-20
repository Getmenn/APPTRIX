import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserSchema } from '../types/slice';

const initialState: UserSchema = {
    user: '',
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string >) => {
            state.user = action.payload;
        },
    },
});

export const {
    actions: userActions,
    reducer: userReducer,
} = slice;
