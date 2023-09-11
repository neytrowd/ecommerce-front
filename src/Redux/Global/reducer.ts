import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoadingType } from '../../Enums/LoadingType';

export type GlobalState = {
    loadingType: LoadingType;
};

const initialState: GlobalState = {
    loadingType: LoadingType.None,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoadingType(
            state,
            action: PayloadAction<{ loadingType: LoadingType; url?: string }>,
        ) {
            state.loadingType = action.payload.loadingType;
        },
    },
    extraReducers: (builder) => {},
});

export const globalActions = globalSlice.actions;
export const globalReducer = globalSlice.reducer;
