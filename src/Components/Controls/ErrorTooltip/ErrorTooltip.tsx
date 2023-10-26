import React, { PropsWithChildren } from 'react';

// Types import
import { ClassNameProps } from '@/Types';

// Styles import
import styles from './ErrorTooltip.module.scss';
import { Tooltip } from '@/Components/Tooltip/Tooltip';

type Props = {
  error?: string;
} & ClassNameProps;

export const errorTooltipClass = styles.error;

export function ErrorTooltip({ error, children, className }: PropsWithChildren<Props>) {
  return (
    <Tooltip shouldShowOnFocus={true} text={error} className={className}>
      {children}
    </Tooltip>
  );
}
