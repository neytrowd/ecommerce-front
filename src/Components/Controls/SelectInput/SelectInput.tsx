import { ClassNameProps, DisabledProps, Pair, Nullable } from '@/Types';
import cn from 'classnames';
import styles from './SelectInput.module.scss';
import React, { useEffect } from 'react';

type Props<TPair extends string | number> = {
   name: string;
   placeholder?: string;
   options: Pair<any>[];
   value: Nullable<Pair<TPair>>;
   onChange: (value: Nullable<Pair<TPair>>) => void;
} & ClassNameProps &
   DisabledProps;

export function SelectInput<TPair extends string | number>({
   name,
   options,
   className,
   value,
   onChange,
   disabled = false,
   placeholder = '',
}: Props<TPair>) {
   useEffect(() => {
      if (!value?.key && !placeholder) {
         onChange(options[0]);
      }
   }, [value, placeholder, options]);

   return (
      <select
         disabled={disabled}
         name={name}
         className={cn('custom-select', className)}
         onChange={(ev) => onChange(options.find((opt) => String(opt.key) === ev.target.value) ?? null)}
         value={(value?.key as unknown as string | number) || ''}
      >
         {placeholder && (
            <option className={styles.placeholder} value={''} selected disabled={true}>
               {placeholder}
            </option>
         )}
         {options.map((option) => (
            <option key={option.key} value={option.key}>
               {option.value}
            </option>
         ))}
      </select>
   );
}
