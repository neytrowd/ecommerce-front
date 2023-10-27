import React, { PropsWithChildren } from 'react';

// Types import
import { ClassNameProps } from '@/Types';

type Props = {
  isActive: boolean;
} & ClassNameProps;

export function ModalItem({ isActive = true, className, children }: PropsWithChildren<Props>) {
  return isActive ? <div className={className}>{children}</div> : null;
}
