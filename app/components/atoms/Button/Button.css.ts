import { style, styleVariants } from '@vanilla-extract/css';
import { rem } from 'polished';
import { vars } from '~/styles/theme.css';

const base = style({
  alignItems: 'center',
  background: vars.color.brand,
  borderColor: vars.color.brand,
  borderRadius: vars.radii.medium,
  borderStyle: 'solid',
  borderWidth: 'thin',
  color: vars.color.white,
  cursor: 'pointer',
  display: 'inline-grid',
  fontWeight: 'bold',
  gridAutoFlow: 'column',
  gridTemplateAreas: '"start label end"',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: 'auto',
  position: 'relative',
  textTransform: 'uppercase',
  transition: 'background 0.2s',
  ':hover': {
    background: vars.color.brandLight,
  },
  ':active': {
    background: vars.color.brandDark,
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 8px ${vars.color.purpleLight}`,
  },
  ':disabled': {
    background: vars.color.gray,
    color: vars.color.grayLight,
    cursor: 'not-allowed',
  },
});

export const sizes = styleVariants({
  small: {
    padding: `${vars.space.xsmall} ${vars.space.small}`,
    fontSize: rem(14),
  },
  medium: {
    padding: `${vars.space.small} ${vars.space.medium}`,
    fontSize: rem(16),
  },
  large: {
    padding: `${vars.space.medium} ${vars.space.large}`,
    fontSize: rem(18),
  },
});

export const button = styleVariants({
  primary: [base],
  secondary: [
    base,
    {
      background: vars.color.white,
      borderColor: vars.color.blue,
      color: vars.color.blue,
      ':hover': {
        background: vars.color.purpleLight,
        borderColor: vars.color.purpleLight,
        color: vars.color.blue,
      },
      ':active': {
        background: vars.color.purpleDark,
        borderColor: vars.color.purpleDark,
        color: vars.color.white,
      },
    },
  ],
  transparent: [
    base,
    {
      background: 'transparent',
      borderColor: 'transparent',
      color: vars.color.brand,
      padding: vars.space.small,
      boxShadow: 'none',
      ':hover': {
        background: 'transparent',
        borderColor: 'transparent',
        color: vars.color.brand,
        boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
      },
      ':active': {
        background: vars.color.grayLight,
        borderColor: 'transparent',
        color: vars.color.brandDark,
      },
    },
  ],
  danger: [
    base,
    {
      background: vars.color.red,
      borderColor: vars.color.red,
      color: vars.color.brandDark,
      ':hover': {
        background: vars.color.redLight,
        borderColor: vars.color.redLight,
        color: vars.color.brandDark,
      },
      ':active': {
        background: vars.color.redDark,
        borderColor: vars.color.redDark,
        color: vars.color.brandDark,
      },
    },
  ],
  warning: [
    base,
    {
      background: vars.color.orange,
      borderColor: vars.color.orange,
      color: vars.color.brandDark,
      ':hover': {
        background: vars.color.orangeLight,
        borderColor: vars.color.orangeLight,
        color: vars.color.brandDark,
      },
      ':active': {
        background: vars.color.orangeDark,
        borderColor: vars.color.orangeDark,
        color: vars.color.brandDark,
      },
    },
  ],
  success: [
    base,
    {
      background: vars.color.green,
      borderColor: vars.color.green,
      color: vars.color.brandDark,
      ':hover': {
        background: vars.color.greenLight,
        borderColor: vars.color.greenLight,
        color: vars.color.brandDark,
      },
      ':active': {
        background: vars.color.greenDark,
        borderColor: vars.color.greenDark,
        color: vars.color.brandDark,
      },
    },
  ],
});

export const fullWidth = style({
  width: '100%',
});

export const start = style({
  gridArea: 'start',
});

export const label = style({
  gridArea: 'label',
});

export const end = style({
  gridArea: 'end',
});

export const hide = style({
  visibility: 'hidden',
});

export const loading = style({
  position: 'absolute',
  visibility: 'visible',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
});
