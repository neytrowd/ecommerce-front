import React, { useMemo } from 'react';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

// Types import
import { ClassNameProps, DataProps } from '@/Types';

// Styles import

type Props = {
   onChange?: (value: boolean) => void;
   valueForSet?: boolean;
   disabled?: boolean;
   visibility?: boolean;
   label?: string;
   dataAttributes?: DataProps;
} & ClassNameProps;

export const Checkbox: React.FC<Props> = ({
   onChange,
   valueForSet = false,
   className,
   disabled = false,
   visibility = true,
   label,
   dataAttributes,
}: Props) => {
   const inputId = useMemo(() => uuid(), []);

   return (
      <span className="custom-control custom-checkbox d-flex">
         <input
            id={inputId}
            type={visibility ? 'checkbox' : 'hidden'}
            checked={valueForSet}
            className={cn('custom-control-input', className)}
            onChange={(e) => onChange?.(e.target.checked)}
            disabled={disabled}
            {...dataAttributes}
         />
         <label className="custom-control-label" htmlFor={inputId}>
            {label}
         </label>
      </span>
   );
};
