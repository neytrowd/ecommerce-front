import axios, { AxiosResponse } from 'axios';
import qs from 'qs';
import { globalHistory } from '@/GlobalHistory';
import { PagesRouting } from '@/Routing';
import { BaseResponse, BinaryResponse, ErrorHandler } from '.';
import { LoadingHandler } from './LoadingHandler';

const LOADING_DELAY = 1000;

axios.interceptors.response.use(
   (response) => {
      const baseResponse = response.data as BaseResponse;
      if (baseResponse && baseResponse.errors) {
         ErrorHandler.getInstance().handle(baseResponse.errors!);
      } // if

      return response;
   },
   (error) => {
      if (error.response.status) {
         switch (error.response.status) {
            case 500: {
               const baseError: BaseResponse = {
                  errors: [{ errorCode: 'ServerIsNotAllowed' }],
               };
               LoadingHandler.getInstance().errorLoading(error.config?.url);
               ErrorHandler.getInstance().handle(baseError.errors!);

               break;
            }

            case 401: {
               LoadingHandler.getInstance().cancelLoading(error.config?.url);
               globalHistory.push(PagesRouting.AuthorizationPages.LoginPage);

               break;
            }
            case 403: {
               LoadingHandler.getInstance().cancelLoading(error.config?.url);
               globalHistory.push(PagesRouting.MainPages.PermissionDenied);
               break;
            }
            case 400: {
               LoadingHandler.getInstance().errorLoading(error.config?.url);

               if (Array.isArray(error.response.data.errors)) {
                  ErrorHandler.getInstance().handle(error.response.data.errors);
               } else {
                  console.error(error.response.data);
               } // if

               break;
            }

            default: {
               LoadingHandler.getInstance().errorLoading(error.config?.url);
               break;
            }
         } // switch
      } // if

      return Promise.reject(error);
   },
);

async function get<TResponse>(url: string, params: Record<string, any> | undefined = undefined): Promise<TResponse> {
   const query = params === undefined ? '' : qs.stringify(params, { allowDots: true });

   if (query) {
      url = `${url}?${query}`;
   }

   const timeOut = startLoading(url);

   try {
      const response = await axios.get(url, {
         withCredentials: true,
      });
      return parseResult<TResponse>(response);
   } catch (error) {
      console.error('Fetch error:', error);
   } finally {
      finishLoading(timeOut, url);
   }
}

async function getBinary(url: string, params: Record<string, any> | undefined = undefined): Promise<BinaryResponse> {
   const query = params === undefined ? '' : qs.stringify(params, { allowDots: true });

   if (query) {
      url = `${url}?${query}`;
   }
   const timeOut = startLoading(url);
   const response = await axios.get(url, {
      responseType: 'arraybuffer',
      withCredentials: true,
   });
   finishLoading(timeOut, url);

   return {
      contentType: response.headers['content-type'],
      data: Buffer.from(response.data, 'binary'),
      fileName: getFileNameResult(response),
   };
}

async function post<TRequest, TResponse>(
   url: string,
   data: TRequest,
   onUploadProgress?: (progressEvent: any) => void,
): Promise<TResponse> {
   const timeOut = !onUploadProgress ? startLoading(url) : null;

   try {
      const response = await axios.post(url, data, {
         withCredentials: true,
         onUploadProgress,
      });

      return parseResult<TResponse>(response);
   } finally {
      if (timeOut) finishLoading(timeOut, url);
   }
}

async function postBinary<TRequest>(url: string, data: TRequest): Promise<BinaryResponse> {
   const timeOut = startLoading(url);

   const response = await axios.post(url, data, {
      responseType: 'arraybuffer',
      withCredentials: true,
   });
   finishLoading(timeOut, url);

   return {
      contentType: response.headers['content-type'],
      data: Buffer.from(response.data, 'binary'),
      fileName: getFileNameResult(response),
   };
}

async function put<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
   const lang = window.localStorage.getItem('lang');

   const timeOut = startLoading(url);
   const response = await axios.put(url, data, {
      headers: { lang },
      withCredentials: true,
   });
   finishLoading(timeOut, url);
   return parseResult<TResponse>(response);
}

async function deleteRequest<TRequest, TResponse>(url: string, data: TRequest): Promise<TResponse> {
   const timeOut = startLoading(url);
   const response = await axios.delete(url, {
      withCredentials: true,
      data,
   });
   finishLoading(timeOut, url);
   return parseResult<TResponse>(response);
}

function parseResult<TResponse>(response: AxiosResponse): TResponse {
   return response.data as TResponse;
}

function getFileNameResult(response: AxiosResponse): string {
   const contentDisposition = response.headers['content-disposition'];
   if (contentDisposition) {
      const match = contentDisposition.match('filenames*=s*(.+).*?(?=;)');
      if (match && match.length >= 1) {
         return match[1];
      }
   }

   return '';
}

function startLoading(url: string): NodeJS.Timeout {
   return setTimeout(() => {
      console.log('LOADING');
      LoadingHandler.getInstance().startLoading(url);
   }, LOADING_DELAY);
}

function finishLoading(timeOut: NodeJS.Timeout, url: string): void {
   console.log('LOADED');
   clearTimeout(timeOut);
   LoadingHandler.getInstance().cancelLoading(url);
}

export const rest = {
   get,
   getBinary,
   post,
   postBinary,
   put,
   delete: deleteRequest,
};
