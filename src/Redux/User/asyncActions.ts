import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetUserInfoResponse } from '@/Api/AppUser/Responses/GetUserInfoResponse';
import { AppUserApi } from '@/Api/AppUser/AppUserApi';
import { AppAuthApi } from '@/Api/AppAuth/AppAuthApi';
import { LoginResponse } from '@/Api/AppAuth/Responses/LoginResponse';
import { LoginRequest } from '@/Api/AppAuth/Requests/LoginRequest';
import { RegisterResponse } from '@/Api/AppAuth/Responses/RegisterResponse';
import { RegisterRequest } from '@/Api/AppAuth/Requests/RegisterRequest';
import { CheckEmailTokenResponse } from '@/Api/AppAuth/Responses/CheckEmailTokenResponse';
import { CheckEmailTokenRequest } from '@/Api/AppAuth/Requests/CheckEmailTokenRequest';

const getUserInfo = createAsyncThunk<GetUserInfoResponse>('user/get-app-user', async () => {
   return AppUserApi.getUserInfo();
});

const login = createAsyncThunk<LoginResponse, LoginRequest>('user/login', async (request) => {
   return AppAuthApi.login(request);
});

const register = createAsyncThunk<RegisterResponse, RegisterRequest>('user/register', async (request) => {
   return AppAuthApi.register(request);
});

const logout = createAsyncThunk('user/logout', async () => {
   return AppAuthApi.logout();
});

const checkEmailToken = createAsyncThunk<CheckEmailTokenResponse, CheckEmailTokenRequest>(
   'user/check-email-token',
   async (request) => {
      return AppAuthApi.checkEmailToken(request);
   },
);

export const userAsyncActions = {
   getUserInfo,
   login,
   register,
   logout,
   checkEmailToken,
};
