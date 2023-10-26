import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { FieldError } from 'react-hook-form';
import { ObjectUtils } from '@/Utils/ObjectUtils';

export function useFormError<TData extends object>(name: keyof TData, error?: FieldErrors<TData>) {
  if (!error) return '';

  const errorField = ObjectUtils.getNestedObjectField(error, String(name));

  return (errorField as FieldError)?.message;
}
