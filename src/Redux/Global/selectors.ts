import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/Redux/RootReducer';
import { selectorUtils } from '@/Utils/SelectorUtils';

const globalStateSelector = (root: RootState) => root.global;

const loadingType = createSelector(
    globalStateSelector,
    (state) => state.loadingType,
);

const isLoading = selectorUtils.createIsLoadingSelector(loadingType);

export const globalSelectors = {
    isLoading,
};
