import { ApiRoutingUtils } from '@/Routing';
import { GetUserInfoResponse } from '@/Api/AppUser/Responses/GetUserInfoResponse';
import { rest } from '@/Api/Rest';

const url = ApiRoutingUtils.createUrl('app-user');

function getUserInfo(): Promise<GetUserInfoResponse> {
   return rest.post(url, {});
}

export const AppUserApi = {
   getUserInfo,
};
