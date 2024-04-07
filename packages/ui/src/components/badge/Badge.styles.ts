import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const badgeDef = twOverrides(
  {
    badge:
      'rounded-radius border font-semibold inline-flex items-center transition-all h-atuo',
    variants: {
      variant: {
        primary: 'bg-primary border-primary text-primary-fg',
        secondary: 'bg-secondary border-secondary text-secondary-fg',
        muted: 'bg-muted border-muted text-muted-fg',
        success: 'bg-success border-success text-success-fg',
        danger: 'bg-danger border-danger text-danger-fg',
        warning: 'bg-warning border-warning text-warning-fg',
        info: 'bg-info text-info-fg',
        ghost: 'text-foreground border-transparent',
        link: 'text-foreground border-transparent underline underline-offset-4',
      },
      size: {
        xs: 'min-h-5 px-1 gap-1 text-[10px]',
        sm: 'min-h-6 py-[2px] px-1.5 gap-1 text-xs',
        md: 'min-h-7 py-[2px] px-2 gap-1 text-xs',
        lg: 'min-h-9 py-1 px-3 gap-1.5 text-sm',
        xl: 'min-h-10 py-1 px-3 gap-2 text-base',
      },
      outline: {
        primary: `bg-background text-primary`,
        secondary: `bg-background text-secondary`,
        muted: `bg-background text-muted`,
        success: `bg-background text-success`,
        danger: `bg-background text-danger`,
        warning: `bg-background text-warning`,
        info: `bg-background text-info`,
        ghost: `bg-background`,
        link: `bg-background`,
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
