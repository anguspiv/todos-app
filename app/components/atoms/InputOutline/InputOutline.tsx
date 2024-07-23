import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './InputOutline.css';

export interface InputOutlineProps extends HTMLAttributes<HTMLDivElement> {
  status?: 'success' | 'error' | 'warning';
  disabled?: boolean;
  readOnly?: boolean;
  focused?: boolean;
}

export function InputOutline({
  children,
  className,
  disabled = false,
  readOnly = false,
  focused = false,
  status,
  ...props
}: InputOutlineProps) {
  return (
    <div
      className={clsx(
        styles.outline,
        {
          [styles.success]: status === 'success',
          [styles.error]: status === 'error',
          [styles.warning]: status === 'warning',
          [styles.readOnly]: readOnly,
          [styles.disabled]: disabled,
          [styles.focused]: focused,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
