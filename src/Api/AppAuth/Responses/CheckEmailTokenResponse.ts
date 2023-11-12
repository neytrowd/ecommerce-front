import { AppUserModel } from '@/Models/AppUserModel';
import { BaseResponse } from '@/Api';

export type CheckEmailTokenResponse = {
   user: AppUserModel;
} & BaseResponse;
