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
  focused?: boolean;
};

export function Checkbox({
  checked = false,
  disabled = false,
  error = false,
  focused = false,
}: CheckboxProps) {
  const isChecked = checked === true || checked === STATUS_CHECKED;
  const showIcon = isChecked || checked === STATUS_INDETERMINATE;

  return (
    <div
      className={clsx(styles.checkbox, {
        [styles.checkboxChecked]: checked === true || checked === STATUS_CHECKED,
        [styles.checkboxDisabled]: disabled,
        [styles.checkboxError]: error,
        [styles.checkboxWarning]: checked === STATUS_INDETERMINATE,
        [styles.checkboxFocused]: focused,
      })}
      data-testid="checkbox"
      data-disabled={disabled}
      data-error={error}
    >
      <div className={styles.content}>
        {showIcon && (
          <FontAwesomeIcon
            icon={isChecked ? faCheck : faMinus}
            data-testid={isChecked ? 'checkmark' : 'dash'}
          />
        )}
      </div>
    </div>
  );
}
