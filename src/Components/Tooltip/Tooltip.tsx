import React, { PropsWithChildren, ReactElement } from 'react';
import RcTooltip from 'rc-tooltip';
import cn from 'classnames';

// Hooks import
import { useTriggeredValue } from '@/Hooks/useTriggeredValue';

// Types import
import { ClassNameProps } from '@/Types';

// Styles import
import 'rc-tooltip/assets/bootstrap.css';
import styles from './Tooltip.module.scss';

type Props = {
  text?: string;
  visible?: boolean;
  placement?: string;
  shouldShowOnHover?: boolean;
  shouldShowOnFocus?: boolean;
} & ClassNameProps;

export function Tooltip({
  text,
  visible = false,
  placement = 'topRight',
  children,
  shouldShowOnHover = false,
  shouldShowOnFocus = false,
  className,
}: PropsWithChildren<Props>) {
  const { value: hovered, on: onHover, off: onLeave } = useTriggeredValue(false, true, false);
  const { value: focused, on: onFocus, off: onBlur } = useTriggeredValue(false, true, false);

  const showOnHover = shouldShowOnHover ? Boolean(text) && hovered : visible;
  const showOnFocus = shouldShowOnFocus ? Boolean(text) && focused : visible;

  return (
    <RcTooltip
      overlay={<span dangerouslySetInnerHTML={{ __html: text ?? '' }} />}
      visible={showOnHover || showOnFocus}
      placement={placement}
    >
      <div
        className={cn(styles.elementWrapper, className)}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children as ReactElement}
      </div>
    </RcTooltip>
  );
}
