import * as stylex from '@stylexjs/stylex';

export const theme = {
  primary500: 'rgb(239, 68, 68)',
  secondary500: 'rgb(244, 244, 245)',
  'button.primaryBg': 'rgb(239, 68, 68)',
  'button.secondaryBg': 'rgb(244, 244, 245)',
};

export const colors = stylex.defineVars(theme);
