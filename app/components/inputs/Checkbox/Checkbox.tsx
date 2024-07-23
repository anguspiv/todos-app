import { useRef } from 'react';
import { useToggleState } from 'react-stately';
import {
  useCheckbox,
  mergeProps,
  useFocusRing,
  VisuallyHidden,
  AriaCheckboxProps,
} from 'react-aria';
import {
  Checkbox as CheckboxDiv,
  STATUS_INDETERMINATE,
  CheckboxProps as CheckboxDivProps,
} from '~/components/atoms/Checkbox';

export interface CheckboxProps extends AriaCheckboxProps {
  className?: string;
}

export function Checkbox({ children, className, ...props }: CheckboxProps) {
  const state = useToggleState(props);
  const ref = useRef(null);
  const { inputProps, labelProps } = useCheckbox(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const isSelected = state.isSelected && !props.isIndeterminate;

  let checked: CheckboxDivProps['checked'] = isSelected;

  if (props.isIndeterminate) {
    checked = STATUS_INDETERMINATE;
  }

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...labelProps} className={className}>
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <CheckboxDiv checked={checked} focused={isFocusVisible} />
      {children}
    </label>
  );
}
