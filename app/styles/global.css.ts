import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontFamily:
    "system-ui, Segoe UI', Roboto, Helvetica, Arial, sans- serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  lineHeight: 1.5,
  WebkitTextSizeAdjust: '100%',
  MozTabSize: '4',
  tabSize: '4',
});

globalStyle('body', {
  margin: 0,
  backgroundColor: vars.color.white,
});

globalStyle('abbr[title]', {
  textDecoration: 'underline dotted',
});

globalStyle('b, strong', {
  fontWeight: 'bolder',
});

globalStyle('code, kbd, samp, pre', {
  fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '1em',
});

globalStyle('small', {
  fontSize: '80%',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

globalStyle('table', {
  textIndent: 0,
  borderColor: 'inherit',
});

globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: '1.15',
  margin: 0,
});

globalStyle('button, select', {
  textTransform: 'none',
});

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  WebkitAppearance: 'button',
});

globalStyle('::-moz-focus-inner', {
  borderStyle: 'none',
  padding: 0,
});

globalStyle(':-moz-focusring', {
  outline: '1px dotted ButtonText',
});

globalStyle(':-moz-ui-invalid', {
  boxShadow: 'none',
});

globalStyle('legend', {
  padding: 0,
});

globalStyle('progress', {
  verticalAlign: 'baseline',
});

globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
  height: 'auto',
});

globalStyle('[type="search"]', {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

globalStyle('::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
});

globalStyle('summary', {
  display: 'list-item',
});
