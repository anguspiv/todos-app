import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import * as styles from './InputOutline.css';

export interface InputOutlineProps extends HTMLAttributes<HTMLDivElement> {
  status?: 'success' | 'error' | 'warning';
  disabled?: boolean;
}

export function InputOutline({
  children,
  className,
  disabled,
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
          [styles.disabled]: disabled,
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
