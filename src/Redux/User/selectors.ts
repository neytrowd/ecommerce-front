import { RootState } from '@/Redux/RootReducer';
import { createSelector } from '@reduxjs/toolkit';

const userStateSelector = (root: RootState) => root.user;

const currentUser = createSelector(userStateSelector, (state) => state.currentUser);

export const userSelectors = {
   currentUser,
};
