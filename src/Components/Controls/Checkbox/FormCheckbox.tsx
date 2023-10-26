import React, { useMemo } from 'react';
import { useFormSetValue } from '@/Hooks/useFormSetValue';
import { useFormError } from '@/Hooks/useFormError';
import { ClassNameProps, DisabledProps, InputRefProps } from '@/Types';
import { ErrorTooltip } from '@/Components/Controls/ErrorTooltip/ErrorTooltip';
import { v4 as uuid } from 'uuid';

type Props<TFormData extends object> = ClassNameProps &
   DisabledProps &
   InputRefProps<HTMLInputElement, TFormData, boolean | null | undefined> & {
      onChange?: (val: boolean) => void;
      label?: string;
   };

export const FormCheckbox = <TFormData extends object>({
   name,
   register,
   rules,
   defaultChecked,
   setValue,
   valueForSet,
   error,
   disabled = false,
   className,
   readOnly = false,
   onChange,
   label,
}: Props<TFormData>) => {
   useFormSetValue(name, valueForSet, setValue);
   const errorMessage = useFormError(name, error);

   const handleChange = (ev: any) => {
      if (ev.target.readOnly) {
         ev.target.checked = !ev.target.checked;
      }
      onChange?.(ev.target.checked);
      return ev.target.checked;
   };

   const inputId = useMemo(() => uuid(), []);

   return (
      <ErrorTooltip error={errorMessage} className={className}>
         <span className="custom-control custom-checkbox d-flex">
            <input
               onClick={handleChange}
               readOnly={readOnly}
               disabled={disabled}
               {...register?.(name as any, rules)}
               name={name as unknown as string}
               type="checkbox"
               id={inputId}
               className="custom-control-input"
               defaultChecked={defaultChecked !== null ? defaultChecked : false}
            />
            <label className="custom-control-label" htmlFor={inputId}>
               {label}
            </label>
         </span>
      </ErrorTooltip>
   );
};
