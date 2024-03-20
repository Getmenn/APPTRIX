import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TestSchema } from '../types/slice';

const initialState: TestSchema = {
    test: '',
};

const slice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<string >) => {
            state.test = action.payload;
        },
    },
});

export const {
    actions: testActions,
    reducer: testReducer,
} = slice;
