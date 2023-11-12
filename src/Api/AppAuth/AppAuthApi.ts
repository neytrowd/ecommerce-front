import { ApiRoutingUtils } from '@/Routing';
import { rest } from '@/Api/Rest';
import { LoginRequest } from '@/Api/AppAuth/Requests/LoginRequest';
import { LoginResponse } from '@/Api/AppAuth/Responses/LoginResponse';
import { RegisterRequest } from '@/Api/AppAuth/Requests/RegisterRequest';
import { RegisterResponse } from '@/Api/AppAuth/Responses/RegisterResponse';
import { CheckEmailTokenResponse } from '@/Api/AppAuth/Responses/CheckEmailTokenResponse';
import { CheckEmailTokenRequest } from '@/Api/AppAuth/Requests/CheckEmailTokenRequest';

const url = ApiRoutingUtils.createUrl('app-auth');

function login(request: LoginRequest): Promise<LoginResponse> {
   return rest.post(`${url}/login`, request);
}

function register(request: RegisterRequest): Promise<RegisterResponse> {
   return rest.post(`${url}/register`, request);
}

function logout(): Promise<void> {
   return rest.post(`${url}/logout`, null);
}

function checkEmailToken(request: CheckEmailTokenRequest): Promise<CheckEmailTokenResponse> {
   return rest.post(`${url}/check-email-token`, request);
}

export const AppAuthApi = {
   login,
   register,
   logout,
   checkEmailToken,
};
