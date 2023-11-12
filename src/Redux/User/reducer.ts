import { Nullable } from '@/Types';
import { AppUserModel } from '@/Models/AppUserModel';
import { createSlice } from '@reduxjs/toolkit';
import { userAsyncActions } from '@/Redux/User/asyncActions';
import { globalHistory } from '@/GlobalHistory';
import { PagesRouting } from '@/Routing';

export type UserState = {
   currentUser: Nullable<AppUserModel>;
};

const initialState: UserState = {
   currentUser: null,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(userAsyncActions.getUserInfo.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;
         })
         .addCase(userAsyncActions.login.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;

            setTimeout(() => {
               if (!action.payload.user.isEmailConfirmed) {
                  globalHistory.push(PagesRouting.AuthorizationPages.EmailConfirmationPage);
               } else {
                  globalHistory.push(PagesRouting.MainPages.MainPage);
               }
            }, 500);
         })
         .addCase(userAsyncActions.register.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;
            setTimeout(() => globalHistory.push(PagesRouting.AuthorizationPages.EmailConfirmationPage), 500);
         })
         .addCase(userAsyncActions.logout.fulfilled, (state) => {
            state.currentUser = null;
            setTimeout(() => globalHistory.push(PagesRouting.AuthorizationPages.LoginPage), 500);
         })
         .addCase(userAsyncActions.checkEmailToken.fulfilled, (state, action) => {
            state.currentUser = action.payload.user;
         });
   },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
