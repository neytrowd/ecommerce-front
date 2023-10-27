import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

// Types import
import { ClassNameProps } from '@/Types';

// Styles import
import styles from './ModalProgressList.scss';

type Props = ClassNameProps;

export const ModalProgressList: FC<Props> = ({ children, className }: PropsWithChildren<Props>) => {
  return <div className={cn(styles.modalProgressList, className)}>{children}</div>;
};
