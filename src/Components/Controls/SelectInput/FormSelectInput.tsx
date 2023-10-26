import React from 'react';
import cn from 'classnames';
import { useFormSetValue, useFormError, useTriggeredValue } from '@/Hooks';
import { ClassNameProps, DataProps, DisabledProps, InputRefProps, Pair } from '@/Types';
import { ErrorTooltip, errorTooltipClass } from '@/Components/Controls/ErrorTooltip/ErrorTooltip';
import styles from './FormSelectInput.scss';

type Props<TFormData extends object> = {
   options: Pair<any>[];
   placeholder?: string;
   needClearButton?: boolean;
   watch?: (name: keyof TFormData) => string | undefined;
   onFocus?: () => void;
   onBlur?: () => void;
   hidden?: boolean;
   dataAttributes?: DataProps;
   onChange?: () => void;
} & ClassNameProps &
   DisabledProps &
   InputRefProps<HTMLSelectElement, TFormData, string | number>;

export const FormSelectInput = <TFormData extends object>({
   name,
   register,
   rules,
   options,
   placeholder = '',
   className = '',
   disabled = false,
   valueForSet = '',
   error,
   setValue,
   readOnly = false,
   watch,
   onFocus,
   onBlur,
   hidden,
   dataAttributes,
   onChange,
}: Props<TFormData>) => {
   const isDefaultValueEmpty = !watch?.(name) && valueForSet === '';

   const { on, off } = useTriggeredValue(isDefaultValueEmpty && Boolean(placeholder), true, false);

   useFormSetValue(name, valueForSet, setValue);
   const errorMessage = useFormError(name, error);

   const optionGroups = Array.from(new Set(options.map((option) => option.group).filter((group) => Boolean(group))));

   const selectOption = (option: Pair<any>) => {
      if (readOnly && valueForSet && valueForSet !== option.key) {
         return;
      }

      const isPlaceholder = option.key === '';

      return (
         <option key={option.key} value={option.key} hidden={isPlaceholder}>
            {option.value}
         </option>
      );
   };

   const inputRef = register?.(name as any, rules);

   const selectList = (
      <select
         name={name as string}
         {...inputRef}
         hidden={hidden}
         onChange={(e) => {
            inputRef?.onChange(e);
            onChange?.();
            e.target.value === placeholder ? on() : off();
         }}
         onBlur={(e) => {
            inputRef?.onBlur(e);
            onBlur?.();
         }}
         onFocus={() => onFocus?.()}
         className={cn({
            [styles.select]: true,
            [styles.select_form]: true,
            [errorTooltipClass]: errorMessage,
         })}
         disabled={disabled || (valueForSet ? false : readOnly)}
         {...dataAttributes}
      >
         {placeholder && (
            <option value={''} hidden disabled>
               {placeholder}
            </option>
         )}

         {optionGroups.length > 0
            ? optionGroups.map((optionGroup) => (
                 <optgroup key={optionGroup} label={optionGroup}>
                    {options.filter((option) => option.group === optionGroup).map((option) => selectOption(option))}
                 </optgroup>
              ))
            : options.map((option) => selectOption(option))}
      </select>
   );

   return hidden ? (
      selectList
   ) : (
      <ErrorTooltip error={errorMessage} className={cn(className, styles.selectWrapper)}>
         {selectList}
      </ErrorTooltip>
   );
};
