import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import clsx from 'clsx';
import * as styles from './InputField.css';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
}

export const InputField = forwardRef(
  ({ className, ...props }: InputFieldProps, ref: Ref<HTMLInputElement>) => (
    <input ref={ref} className={clsx(styles.field, className)} {...props} />
  ),
);

InputField.displayName = 'InputField';
