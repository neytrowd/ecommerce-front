import React, { ReactNode } from 'react';
import styles from './Button.module.scss';
import { ClassNameProps, DataProps } from '@/Types';
import cn from 'classnames';

type Props = {
   onClick?: () => void;
   type?: 'button' | 'submit';
   theme?: 'light' | 'outline-light' | 'primary' | 'outline-primary';
   size?: 'small' | 'medium' | 'large';
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
   theme = 'primary',
   size = 'medium',
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
         className={cn(`btn btn-${theme}`, className, {
            [styles.disabled]: disabled,
            ['btn-block']: fullWith,
            ['btn-sm']: size == 'small',
            ['btn-lg']: size == 'large',
         })}
         onClick={onClick}
         {...dataAttributes}
      >
         {children}
      </button>
   );
};
