import React, { useState } from 'react';
import {
    toast,
    ToastContainer,
    ToastContent,
    ToastOptions,
    Zoom,
} from 'react-toastify';
import cn from 'classnames';
import './Toast.scss';

export type ToastSettings = {
    text: string;
    title?: string;
};

enum ToastType {
    Success,
    Error,
    Info,
}

function showError(props: ToastSettings) {
    showToast(props, toast.error, ToastType.Error);
}

function showSuccess(props: ToastSettings) {
    showToast(props, toast.success, ToastType.Success);
}

function showInfo(props: ToastSettings) {
    showToast(props, toast.info, ToastType.Info);
}

function showToast(
    props: ToastSettings,
    toastMethod: (content: ToastContent, options?: ToastOptions) => void,
    type: ToastType,
) {
    toastMethod(
        ({ closeToast }) => (
            <Toast {...props} closeToast={closeToast} toastType={type} />
        ),
        {
            className: 'toast-wrapper',
        },
    );
}

function getToastClassName(toastType: ToastType) {
    switch (toastType) {
        case ToastType.Error:
            return 'error';
        case ToastType.Success:
            return 'success';
        case ToastType.Info:
            return 'info';
        default:
            return 'info';
    }
}

type Props = {
    closeToast: (() => void) | undefined;
    toastType: ToastType;
} & ToastSettings;

function Toast(props: Props) {
    const { text, title, toastType } = props;
    return (
        <div className={cn('pizza-toast', getToastClassName(toastType))}>
            <h3
                className="title"
                dangerouslySetInnerHTML={{ __html: title || '' }}
            />
            <p className="text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

export function ToastContainerWrapper() {
    const [toastCount, setToastCount] = useState(0);

    toast.onChange((toast) => {
        setToastCount(toast as any);
    });

    return (
        <>
            {toastCount > 1 && (
                <div
                    className="close-all-toasts-button"
                    onClick={() => toast.dismiss()}
                >
                    &times;
                </div>
            )}
            <ToastContainer
                className="toast-container"
                autoClose={15000}
                hideProgressBar={false}
                transition={Zoom}
            />
        </>
    );
}

export const Toasts = {
    showError,
    showSuccess,
    showInfo,
};
