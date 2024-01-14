import * as stylex from '@stylexjs/stylex';

export const buttonTheme = {
  fontWeight: '500',
  fontSize: '0.875rem',
  lineHeight: '1.25rem',
  borderWidth: '1px',
  borderRadius: '0.25rem',
  borderColor: 'transparent',

  // Primary variant
  primaryBg: '#2563EB',
  primaryColor: '#FFFFFF',
  primaryHoverBg: '#1D4ED8',
  primaryHoverColor: '#FFFFFF',
  primaryActiveBg: '#3B82F6',
  primaryActiveColor: '#FFFFFF',

  // Secondary variant
  secondaryBg: '#6B7280',
  secondaryColor: '#FFFFFF',
  secondaryHoverBg: '#4B5563',
  secondaryHoverColor: '#FFFFFF',
  secondaryActiveBg: '#9CA3AF',
  secondaryActiveColor: '#FFFFFF',
};

export const buttonTokens = stylex.defineVars(buttonTheme);
