import { style } from '@vanilla-extract/css';
import { rem } from 'polished';
import { vars } from '~/styles/theme.css';

export const checkbox = style({
  backgroundColor: 'transparent',
  border: `${vars.border.small} solid ${vars.color.darkGray}`,
  borderRadius: vars.radii.small,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: vars.transitions.fast,
  transitionProperty: 'background-color, border-color',
  width: rem(24),
  height: rem(24),
  cursor: 'pointer',
});

export const checkboxChecked = style({
  backgroundColor: vars.color.darkBlue,
  borderColor: vars.color.darkBlue,
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
  backgroundColor: vars.color.lightGray,
  borderColor: vars.color.lightGray,
  color: vars.color.gray,
  cursor: 'not-allowed',
});
