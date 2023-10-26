import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import { ClassNameProps, DataProps } from '@/Types';
import cn from 'classnames';

type Props = {
   onClick?: () => void;
   type?: 'button' | 'submit';
   disabled?: boolean;
   notificationNumber?: number;
   showEmptyNotification?: boolean;
   dataAttributes?: DataProps;
   autoFocus?: boolean;
   children: ReactNode;
   fullWith?: boolean;
} & ClassNameProps;

export const Button: React.FC<Props> = ({
   disabled = false,
   onClick,
   className,
   type = 'button',
   dataAttributes,
   autoFocus,
   children,
   fullWith,
}: Props) => {
   return (
      <button
         type={type}
         disabled={disabled}
         autoFocus={autoFocus}
         className={cn('btn btn-primary py-2 px-4', className, {
            [styles.disabled]: disabled,
            ['btn-block']: fullWith,
         })}
         onClick={onClick}
         {...dataAttributes}
      >
         {children}
      </button>
   );
};
