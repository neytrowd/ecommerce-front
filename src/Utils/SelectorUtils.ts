import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/Redux/RootReducer';
import { LoadingType } from '@/Enums/LoadingType';

const createIsLoadingSelector = (selector: (state: RootState) => LoadingType) =>
    createSelector(selector, (state) => state === LoadingType.Loading);

const createIsLoadedSelector = (selector: (state: RootState) => LoadingType) =>
    createSelector(selector, (state) => state === LoadingType.Loaded);

const createIsLoadingErrorSelector = (
    selector: (state: RootState) => LoadingType,
) => createSelector(selector, (state) => state === LoadingType.Error);

const createIsNotLoadedSelector = (
    selector: (state: RootState) => LoadingType,
) => createSelector(selector, (state) => state === LoadingType.None);

export const selectorUtils = {
    createIsLoadingSelector,
    createIsLoadedSelector,
    createIsLoadingErrorSelector,
    createIsNotLoadedSelector,
};
