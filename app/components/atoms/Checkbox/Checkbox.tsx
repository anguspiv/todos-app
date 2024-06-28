import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import * as styles from './Checkbox.css';

export const STATUS_CHECKED = 'checked';
export const STATUS_INDETERMINATE = 'indeterminate';

export type CheckboxProps = {
  checked?: boolean | 'checked' | 'indeterminate';
  disabled?: boolean;
  error?: boolean;
};

export function Checkbox({ checked = false, disabled = false, error = false }: CheckboxProps) {
  return (
    <div
      className={clsx(styles.checkbox, {
        [styles.checkboxChecked]: checked === true || checked === STATUS_CHECKED,
        [styles.checkboxDisabled]: disabled,
        [styles.checkboxError]: error,
        [styles.checkboxWarning]: checked === STATUS_INDETERMINATE,
      })}
      data-testid="checkbox"
      data-disabled={disabled}
      data-error={error}
    >
      {(checked === true || checked === STATUS_CHECKED) && (
        <FontAwesomeIcon icon={faCheck} data-testid="checkmark" />
      )}
      {checked === STATUS_INDETERMINATE && <FontAwesomeIcon icon={faMinus} data-testid="dash" />}
    </div>
  );
}
