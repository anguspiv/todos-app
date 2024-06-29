import { style } from '@vanilla-extract/css';
import { rem, lighten } from 'polished';
import { vars, color } from '~/styles/theme.css';

export const outline = style({
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderBottom: `${vars.border.small} solid ${vars.color.darkGray}`,
  display: 'inline-grid',
  gridTemplateAreas: '"start input end"',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: '1fr',
  justifyContent: 'start',
  transitionTimingFunction: 'ease-in-out',
  transitionDuration: vars.transitions.fast,
  transitionProperty: 'background-color, border-color',
  height: rem(24),
  minWidth: rem(200),
  cursor: 'pointer',
  ':hover': {
    borderColor: vars.color.darkBlue,
  },
  ':focus': {
    borderColor: vars.color.blue,
  },
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
  backgroundColor: lighten(0.1, color.lightGray),
  borderColor: vars.color.lightGray,
  color: vars.color.gray,
  cursor: 'not-allowed',
  ':hover': {
    borderColor: vars.color.lightGray,
  },
});
