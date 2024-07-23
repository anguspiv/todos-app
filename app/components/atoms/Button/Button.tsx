import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import * as styles from './Button.css';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  start?: ReactNode;
  end?: ReactNode;
  variant?: 'primary' | 'secondary' | 'transparent' | 'danger' | 'warning' | 'success';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  fullWidth?: boolean;
  icon?: boolean;
}

export function Button({
  children,
  className,
  start,
  end,
  variant = 'primary',
  size = 'medium',
  loading,
  fullWidth,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        styles.sizes[size],
        styles.button[variant],
        fullWidth && styles.fullWidth,
        className,
      )}
    >
      {start && <div className={clsx(styles.start, loading && styles.hide)}>{start}</div>}
      <div className={clsx(styles.label, loading && styles.hide)}>{children}</div>
      {end && <div className={clsx(styles.end, loading && styles.hide)}>{end}</div>}
      {loading && (
        <div className={clsx(styles.loading)}>
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      )}
    </button>
  );
}
