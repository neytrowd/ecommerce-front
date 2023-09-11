import { EnhancedStore } from '@reduxjs/toolkit';
import { globalActions } from '@/Redux/Global/reducer';
import { LoadingType } from '@/Enums/LoadingType';

export class LoadingHandler {
    private static instance: LoadingHandler;

    public store: EnhancedStore;

    constructor(getState: EnhancedStore) {
        this.store = getState;
        LoadingHandler.instance = this;
    }

    public static getInstance(): LoadingHandler {
        return this.instance;
    }

    public startLoading(url: string): void {
        this.store.dispatch(
            globalActions.setLoadingType({
                loadingType: LoadingType.Loading,
                url,
            }),
        );
    }

    public cancelLoading(url: string): void {
        this.store.dispatch(
            globalActions.setLoadingType({
                loadingType: LoadingType.Loaded,
                url,
            }),
        );
    }

    public errorLoading(url: string): void {
        setTimeout(() => {
            this.store.dispatch(
                globalActions.setLoadingType({
                    loadingType: LoadingType.Error,
                    url,
                }),
            );
        }, 2000);
    }

    public reset(): void {
        this.store.dispatch(
            globalActions.setLoadingType({ loadingType: LoadingType.None }),
        );
    }
}
