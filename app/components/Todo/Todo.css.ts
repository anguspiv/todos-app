import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/theme.css';

export const todo = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gridTemplateRows: 'auto',
  gridTemplateAreas: '"checkbox label delete"',
  gap: vars.space.small,
  alignItems: 'center',
  padding: vars.space.small,
});

export const checkbox = style({
  gridArea: 'checkbox',
});

export const label = style({
  gridArea: 'label',
});

export const deleteButton = style({
  gridArea: 'delete',
  color: vars.color.red,
  ':hover': {
    color: vars.color.redDark,
  },
  ':active': {
    color: vars.color.redDark,
  },
});
