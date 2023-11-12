import { AppUserModel } from '@/Models/AppUserModel';
import { BaseResponse } from '@/Api';

export type RegisterResponse = {
   user: AppUserModel;
} & BaseResponse;
