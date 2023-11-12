import { AppUserModel } from '@/Models/AppUserModel';
import { BaseResponse } from '@/Api';

export type LoginResponse = {
   user: AppUserModel;
} & BaseResponse;
