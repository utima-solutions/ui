import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const badgeDef = twOverrides(
  {
    badge:
      'rounded-radius text-center font-semibold inline-flex items-center transition-all',
    variants: {
      variant: {
        primary: 'bg-primary-500 text-primary-fg',
        secondary: 'bg-secondary-500 text-secondary-fg',
        success: 'bg-success-500 text-success-fg',
        danger: 'bg-danger-500 text-danger-fg',
        warning: 'bg-warning-500 text-warning-fg',
        info: 'bg-info-500 text-info-fg',
        ghost: 'text-foreground',
        link: 'text-foreground underline underline-offset-4',
      },
      size: {
        xs: 'min-h-5 px-1 gap-1 text-[10px]',
        sm: 'min-h-6 py-[2px] px-1.5 gap-1 text-xs',
        md: 'min-h-7 py-[2px] px-2 gap-1 text-xs',
        lg: 'min-h-9 py-1 px-3 gap-1.5 text-sm',
        xl: 'min-h-10 py-1 px-3 gap-2 text-base',
      },
      outline: {
        primary: `bg-background border border-primary-500 text-primary-600`,
        secondary: `bg-background border border-secondary-500 text-secondary-600`,
        success: `bg-background border border-success-500 text-success-600`,
        danger: `bg-background border border-danger-500 text-danger-600`,
        warning: `bg-background border border-warning-500 text-warning-600`,
        info: `bg-background border border-info-500 text-info-600`,
        ghost: `bg-background border border-transparent`,
        link: `bg-background border border-transparent`,
      },
      disabled: {
        DEFAULT: 'opacity-65 cursor-not-allowed',
      },
    },
  },
  'badge',
);

export const badgeStyles = cva(badgeDef.badge, {
  variants: badgeDef.variants,
});
