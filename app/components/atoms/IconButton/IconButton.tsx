import type { ComponentPropsWithoutRef } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import * as styles from './IconButton.css';

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  label: string;
  size?: 'small' | 'medium' | 'large';
  icon: IconProp;
  type?: 'button' | 'submit' | 'reset';
  color?: 'danger' | 'success' | 'warning';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, icon, size = 'medium', type = 'button', className, color, ...props }, ref) => (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      ref={ref}
      aria-label={label}
      className={clsx(styles.root, color && styles.colors[color], styles.sizes[size], className)}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  ),
);

IconButton.displayName = 'IconButton';
