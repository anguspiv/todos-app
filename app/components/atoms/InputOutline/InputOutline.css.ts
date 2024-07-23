import { style } from '@vanilla-extract/css';
import { rem, lighten } from 'polished';
import { vars, color } from '~/styles/theme.css';

const focusedStyles = {
  background: lighten(0.42, color.blueLight), // `radial-gradient(transparent, ${lighten(0.3, color.purple)})`,
  borderColor: vars.color.blue,
};

export const outline = style({
  alignItems: 'center',
  background: 'transparent',
  borderBottom: `${vars.border.small} solid ${vars.color.grayDark}`,
  display: 'inline-grid',
  padding: `${rem(4)} ${rem(4)}`,
  gridTemplateAreas: '"start input end"',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: '1fr',
  justifyContent: 'start',
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: vars.transitions.fast,
  transitionProperty: 'background, border-color',
  height: rem(32),
  minWidth: rem(200),
  cursor: 'pointer',
  ':hover': {
    borderColor: vars.color.blue,
  },
  ':focus': focusedStyles,
  ':focus-within': focusedStyles,
});

export const success = style({
  borderColor: vars.color.success,
  color: vars.color.black,
});

export const error = style({
  borderColor: vars.color.error,
  backgroundColor: lighten(0.3, color.error),
  color: vars.color.black,
});

export const warning = style({
  borderColor: vars.color.warning,
  backgroundColor: lighten(0.3, color.warning),
  color: vars.color.black,
});

export const disabled = style({
  backgroundColor: lighten(0.1, color.grayLight),
  borderColor: vars.color.disabled,
  color: vars.color.gray,
  cursor: 'not-allowed',
  ':hover': {
    borderColor: vars.color.grayLight,
  },
});

export const readOnly = style({
  borderColor: 'transparent',
  ':hover': {
    borderColor: 'transparent',
  },
});

export const focused = style(focusedStyles);
