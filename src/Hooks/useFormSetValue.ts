import { useEffect } from 'react';
import { SetValueConfig } from 'react-hook-form';

export function useFormSetValue<TData extends object>(
  name: keyof TData,
  value: any,
  setValue?: (name: any, value: any, options?: SetValueConfig) => void,
) {
  useEffect(() => {
    if (value !== '') setValue?.(name, value);
  }, [setValue, value]);
}
