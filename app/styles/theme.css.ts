import { rem } from 'polished';
import { createGlobalTheme } from '@vanilla-extract/css';

export const color = {
  brand: '#4271a1',
  black: '#212121',
  white: '#f9f8f9',
  green: '#66be81',
  red: '#f55a4e',
  orange: '#d6af4f',
  blue: '#9abcbf',
  darkBlue: '#375879',
  purple: '#7acdc8',
  darkGray: '#9f9f9f',
  gray: '#777',
  lightGray: '#dfdfdf',
  error: '#f55a4e',
  warning: '#d6af4f',
  success: '#66be81',
  info: '#9abcbf',
};

export const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'system-ui, sans-serif',
  monospace: 'Menlo, monospace',
};

export const space = {
  xsmall: rem(4),
  small: rem(8),
  medium: rem(16),
  large: rem(20),
  xlarge: rem(32),
};

export const breakpoints = {
  small: `screen and (min-width: ${rem(320)})`,
  medium: `screen and (min-width: ${rem(768)})`,
  large: `screen and (min-width: ${rem(1024)})`,
};

export const shadows = {
  small: '0 2px 4px rgba(0, 0, 0, 0.125)',
  medium: '0 4px 8px rgba(0, 0, 0, 0.125)',
  large: '0 8px 16px rgba(0, 0, 0, 0.125)',
};

export const radii = {
  small: rem(4),
  medium: rem(8),
  large: rem(16),
};

export const border = {
  small: 'thin',
  medium: rem(2),
  large: rem(4),
};

export const transitions = {
  fast: '0.2s',
  medium: '0.4s',
  slow: '0.8s',
};

export const zIndex = {
  fab: '1050',
  appBar: '1100',
  drawer: '1200',
  modal: '1300',
  snackbar: '1400',
  tooltip: '1500',
};

export const vars = createGlobalTheme(':root', {
  color,
  fonts,
  space,
  breakpoints,
  shadows,
  radii,
  border,
  transitions,
  zIndex,
});
