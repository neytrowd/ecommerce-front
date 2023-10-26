import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { useFormError } from '@/Hooks/useFormError';
import { ErrorTooltip, errorTooltipClass } from '@/Components/Controls/ErrorTooltip/ErrorTooltip';
import { ClassNameProps, DisabledProps, InputRefProps } from '@/Types';
import { v4 as uuidV4 } from 'uuid';
import cn from 'classnames';
import styles from './Input.module.scss';

type Props<TFormData extends object> = {
  name: keyof TFormData;
  type?: 'integer' | 'currency' | 'weight';
  inputClassName?: string;
  error?: FieldErrors<TFormData>;
  placeholder?: string;
} & ClassNameProps &
  DisabledProps &
  InputRefProps<HTMLInputElement, TFormData, string | number>;

export const NumberFormInput = <TFormData extends object>({
  name,
  register,
  rules,
  setValue,
  type = 'currency',
  inputClassName,
  className,
  disabled,
  readOnly,
  error,
  onBlur,
  placeholder,
}: Props<TFormData>): React.ReactElement => {
  const inputId = useMemo(() => uuidV4(), []);
  const inputRef = register?.(name as any, rules);
  const formattedInputRef = useRef<HTMLInputElement | null>(null);

  const errorMessage = useFormError(name, error);

  const formatNumber = useCallback((value: number) => {
    switch (type) {
      case 'integer':
        return value.toIntegerString();

      case 'currency':
        return value.toCurrencyString();

      case 'weight':
        return value.toWeightString();
    } // switch
  }, []); // formatNumber

  // Default value setting
  useEffect(() => {
    if (!formattedInputRef.current) return;

    const input = document.getElementById(inputId) as HTMLInputElement;

    if (input) {
      const initialValue = input.value;
      formattedInputRef.current.value = initialValue ? formatNumber(Number(initialValue)) : initialValue;
    } // if
  }, [inputRef]);

  return (
    <ErrorTooltip error={errorMessage} className={className}>
      <input
        name={`${name as string}_formatted`}
        ref={formattedInputRef}
        readOnly={readOnly || disabled}
        disabled={disabled}
        placeholder={placeholder}
        className={cn(styles.input, inputClassName, errorMessage ? errorTooltipClass : null)}
        onKeyPress={(e) => {
          const key = e.key;
          const specialSymbols = [',', '.', '-'];
          const value = e.currentTarget.value;

          // Disable non-numeric symbols
          if (isNaN(Number(key)) && !specialSymbols.includes(key)) {
            e.preventDefault();
            return;
          } // if

          // Switch minus in number
          if (key === '-') {
            e.preventDefault();

            const isNegativeValue = value.includes('-');
            e.currentTarget.value = isNegativeValue ? value.slice(1) : `${key}${value}`;

            return;
          } // if

          // Disable more than one non-integer parts
          if (isNaN(Number(key)) && specialSymbols.includes(key) && (value.includes(',') || value.includes('.'))) {
            e.preventDefault();
            return;
          } // if

          return key;
        }}
        onFocus={(e) => {
          const input = document.getElementById(inputId) as HTMLInputElement;

          if (input) {
            e.target.value = input.value;
          } // if
        }}
        onBlur={(e) => {
          // Checking an empty value
          if (!e.target.value.length) {
            setValue?.(name as any, '' as any, { shouldValidate: true, shouldDirty: true });
            onBlur?.(e);
            return;
          } // if

          // Delete '.', ',', '-' from the end of the string
          let value: string | number = e.target.value.replace(/[.,-]+$/, '');

          // Сhecking a string for a number
          value = value.replace(',', '.');
          if (value && !isNaN(Number(value))) {
            setValue?.(name as any, value as any, { shouldValidate: true, shouldDirty: true });
            e.target.value = formatNumber(Number(value));
            onBlur?.(e);
          } // if
        }}
      />

      <input id={inputId} name={name as string} {...inputRef} hidden={true} />
    </ErrorTooltip>
  );
};
