import { ErrorDetail } from './ErrorDetail';
import { RootState } from '@/Redux/RootReducer';

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
        console.log(errors);
    } // handle
}
