import { ErrorDetail } from './ErrorDetail';
import { RootState } from '@/Redux/RootReducer';
import { Toasts } from '@/Components/Toast/Toast';

export class ErrorHandler {
   private static instance: ErrorHandler;

   private readonly getState: () => RootState;

   constructor(getState: () => RootState) {
      this.getState = getState;
      ErrorHandler.instance = this;
   }

   public static getInstance(): ErrorHandler {
      return this.instance;
   }

   public handle(errors: ErrorDetail[]) {
      errors.forEach((error) => {
         const title = error.errorCode;
         const text = error?.errorMessage ?? 'Unknown error';

         Toasts.showError({
            title: title,
            text: text,
         });
      });
   } // handle
}
