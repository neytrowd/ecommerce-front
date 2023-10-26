import React, { useMemo } from 'react';
import cn from 'classnames';
import { v4 as uuidV4 } from 'uuid';
import { useFormSetValue } from '@/Hooks/useFormSetValue';
import { useFormError } from '@/Hooks/useFormError';
import { ClassNameProps, DataProps, DisabledProps, InputRefProps } from '@/Types';
import { ErrorTooltip, errorTooltipClass } from '@/Components/Controls/ErrorTooltip/ErrorTooltip';
import styles from './Input.module.scss';

export type Props<TFormData extends object> = {
  type?: 'text' | 'password' | 'number';
  placeholder?: string;
  autocomplete?: 'off' | 'new-password';
  hidden?: boolean;
  step?: number;
  min?: number;
  max?: number;
  inputClassName?: string;
  onChange?: (val: string) => void;
  dataAttributes?: DataProps;
  onFocus?: () => void;
  autoFocus?: boolean;
} & ClassNameProps &
  DisabledProps &
  InputRefProps<HTMLInputElement, TFormData, string | number>;

export function FormInput<TFormData extends object>({
  name,
  register,
  rules,
  setValue,
  valueForSet = '',
  placeholder,
  error,
  readOnly = false,
  disabled = false,
  type = 'text',
  autocomplete = 'off',
  hidden = false,
  className,
  inputClassName,
  onBlur,
  step = 1,
  min,
  max,
  onChange,
  onFocus,
  autoFocus = false,
  dataAttributes,
}: Props<TFormData>) {
  useFormSetValue(name, valueForSet, setValue);
  const errorMessage = useFormError(name, error);

  const inputId = useMemo(() => uuidV4(), []);
  const inputRef = register?.(name as any, rules);

  const input = (
    <input
      {...inputRef}
      id={inputId}
      name={name as string}
      defaultValue={valueForSet}
      placeholder={placeholder}
      autoComplete={autocomplete}
      onBlur={onBlur}
      onFocus={onFocus}
      readOnly={disabled || readOnly}
      disabled={disabled}
      hidden={hidden}
      type={type}
      step={step}
      autoFocus={autoFocus}
      onChange={(e) => {
        inputRef?.onChange(e);

        if (type === 'number' && min && Number(e.target.value) < min) {
          e.target.value = min.toString();
        }

        if (type === 'number' && max && Number(e.target.value) > max) {
          e.target.value = max.toString();
        }

        onChange?.(e.target.value);
      }}
      min={min}
      max={max}
      className={cn('form-control', styles.input, inputClassName, errorMessage ? errorTooltipClass : null)}
      {...dataAttributes}
    />
  );

  return hidden ? (
    input
  ) : (
    <ErrorTooltip error={errorMessage} className={className}>
      {input}
    </ErrorTooltip>
  );
}
