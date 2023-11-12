import { FocusEvent } from 'react';
import { RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Nullable } from '.';

export type ClassNameProps = {
   className?: string;
};

export type ModalProps = {
   closeModalWindow: () => void;
} & ClassNameProps;

export type DisabledProps = {
   disabled?: boolean;
   readOnly?: boolean;
};

export type InputRefProps<
   T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
   TFormData extends object,
   TValue extends number | string | boolean | undefined | null,
> = {
   name: keyof TFormData;
   register?: UseFormRegister<TFormData>;
   rules?: RegisterOptions;
   setValue?: UseFormSetValue<TFormData>;
   valueForSet?: TValue;
   defaultChecked?: Nullable<boolean>;
   error?: FieldErrors<TFormData>;
   onBlur?: (event: FocusEvent<T>) => void;
   onFocus?: (event: FocusEvent<T>) => void;
};

export type DataProps = {
   'data-testid'?: string;
   'data-toggle'?: string;
};
