import { forwardRef, Ref, InputHTMLAttributes, ReactNode } from 'react';
import { InputField } from '~/components/atoms/InputField';
import { InputOutline } from '~/components/atoms/InputOutline';
import * as styles from './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  start?: ReactNode;
  end?: ReactNode;
  status?: 'error' | 'success' | 'warning';
  disabled?: boolean;
  readOnly?: boolean;
}

export const Input = forwardRef(
  (
    { start, end, status, disabled, className, readOnly, ...props }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => (
    <InputOutline status={status} disabled={disabled} className={className} readOnly={readOnly}>
      <div className={styles.start}>{start}</div>
      <InputField
        {...props}
        className={styles.input}
        disabled={disabled}
        ref={ref}
        readOnly={readOnly}
      />
      <div className={styles.end}>{end}</div>
    </InputOutline>
  ),
);

Input.displayName = 'Input';
