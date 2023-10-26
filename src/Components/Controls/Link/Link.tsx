import { Link as RouterLink } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { ClassNameProps, DataProps } from '@/Types';
import cn from 'classnames';
import styles from './Link.module.scss';

type Props = {
   to: string;
   text?: string;
   dataAttributes?: DataProps;
} & ClassNameProps;

export const Link = ({ children, to, className, dataAttributes, text }: PropsWithChildren<Props>) => {
   return (
      <RouterLink to={to} {...dataAttributes} className={cn(styles.link, className)}>
         {text}
         {children}
      </RouterLink>
   );
};
