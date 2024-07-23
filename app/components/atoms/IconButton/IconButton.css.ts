import { style, styleVariants } from '@vanilla-extract/css';
import { rem, lighten } from 'polished';
import { vars, color } from '~/styles/theme.css';

export const root = style({
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  borderRadius: '50%',
  color: vars.color.blue,
  cursor: 'pointer',
  display: 'inline-flex',
  height: rem(24),
  justifyContent: 'center',
  padding: vars.space.small,
  transition: 'background 0.2s',
  width: rem(24),
  fontSize: rem(14),
  ':hover': {
    background: lighten(0.1, color.purpleLight),
  },
  ':active': {
    background: vars.color.purpleLight,
    color: vars.color.blueDark,
  },
  ':focus': {
    outline: 'none',
  },
  ':disabled': {
    background: 'transparent',
    color: vars.color.gray,
    cursor: 'not-allowed',
  },
});

export const colors = styleVariants({
  danger: [
    root,
    {
      color: vars.color.redDark,
      ':hover': {
        background: lighten(0.1, color.redLight),
      },
      ':active': {
        background: vars.color.redLight,
        color: vars.color.redDark,
      },
    },
  ],
  success: [
    root,
    {
      color: vars.color.greenDark,
      ':hover': {
        background: lighten(0.1, color.greenLight),
      },
      ':active': {
        background: vars.color.greenLight,
        color: vars.color.greenDark,
      },
    },
  ],
  warning: [
    root,
    {
      color: vars.color.orangeDark,
      ':hover': {
        background: lighten(0.1, color.orangeLight),
      },
      ':active': {
        background: vars.color.orangeLight,
        color: vars.color.orangeDark,
      },
    },
  ],
});

export const sizes = styleVariants({
  small: {
    fontSize: rem(12),
    height: rem(20),
    padding: vars.space.xsmall,
    width: rem(20),
  },
  medium: {
    fontSize: rem(14),
    height: rem(24),
    padding: vars.space.small,
    width: rem(24),
  },
  large: {
    fontSize: rem(16),
    height: rem(28),
    padding: vars.space.medium,
    width: rem(28),
  },
});
