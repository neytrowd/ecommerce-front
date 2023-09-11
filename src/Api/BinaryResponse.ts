import { BaseResponse } from '.';

export type BinaryResponse = {
    contentType: string;
    fileName: string;
    data: Buffer;
} & BaseResponse;
