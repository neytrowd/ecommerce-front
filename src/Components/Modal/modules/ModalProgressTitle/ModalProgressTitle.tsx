import React, { FC } from 'react';
import cn from 'classnames';

// Types import
import { ClassNameProps } from '@/Types';

// Styles import
import styles from './ModalProgressTitle.scss';

type Props = {
  title: string;
  isActive: boolean;
} & ClassNameProps;

export const ModalProgressTitle: FC<Props> = ({ title, isActive, className }: Props) => {
  return (
    <div className={cn(className, styles.modalProgressTitle, { [styles.modalProgressTitleActive]: isActive })}>
      {title}
    </div>
  );
};
