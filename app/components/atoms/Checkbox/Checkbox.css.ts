import { style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { vars } from '~/styles/theme.css';

const focusedStyles = {
  outline: 'none',
  boxShadow: `0 0 10px ${vars.color.blue}`,
};

export const checkbox = style({
  backgroundColor: 'transparent',
  border: `${vars.border.small} solid ${vars.color.grayDark}`,
  borderRadius: vars.radii.small,
  display: 'block',
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: vars.transitions.fast,
  transitionProperty: 'background-color, border-color, box-shadow',
  boxShadow: '0 0 0 transparent',
  width: rem(24),
  height: rem(24),
  cursor: 'pointer',
  ':focus': focusedStyles,
});

export const content = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  fontSize: rem(20),
});

export const checkboxChecked = style({
  backgroundColor: vars.color.blue,
  borderColor: vars.color.blue,
  color: vars.color.white,
});

export const checkboxWarning = style({
  borderColor: vars.color.warning,
  backgroundColor: vars.color.warning,
  color: vars.color.black,
});

export const checkboxError = style({
  borderColor: vars.color.error,
  backgroundColor: vars.color.error,
  color: vars.color.black,
});

export const checkboxDisabled = style({
  backgroundColor: vars.color.grayLight,
  borderColor: vars.color.grayLight,
  color: vars.color.gray,
  cursor: 'not-allowed',
});

export const checkboxFocused = style(focusedStyles);
