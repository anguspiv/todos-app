import { rem } from 'polished';
import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    brand: '#07c',
    black: '#000',
    white: '#fff',
    green: '#0f0',
    red: '#f00',
    blue: '#00f',
    yellow: '#ff0',
    purple: '#f0f',
    cyan: '#0ff',
    gray: '#888',
    darkGray: '#444',
    lightGray: '#ccc',
    error: '#f00',
    warning: '#ff0',
    success: '#0f0',
    info: '#00f',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  space: {
    xsmall: rem(4),
    small: rem(8),
    medium: rem(16),
    large: rem(20),
    xlarge: rem(32),
  },
  breakpoints: {
    small: `screen and (min-width: ${rem(320)})`,
    medium: `screen and (min-width: ${rem(768)})`,
    large: `screen and (min-width: ${rem(1024)})`,
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.125)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.125)',
    large: '0 8px 16px rgba(0, 0, 0, 0.125)',
  },
  radii: {
    small: rem(4),
    medium: rem(8),
    large: rem(16),
  },
  border: {
    small: 'thin',
    medium: rem(2),
    large: rem(4),
  },
  transitions: {
    fast: '0.2s',
    medium: '0.4s',
    slow: '0.8s',
  },
  zIndices: {
    fab: '1050',
    appBar: '1100',
    drawer: '1200',
    modal: '1300',
    snackbar: '1400',
    tooltip: '1500',
  },
});
