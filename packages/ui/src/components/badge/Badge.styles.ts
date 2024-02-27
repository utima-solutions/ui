import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

const defaultBorder = 'bg-none bg-transparent border';

export const badgeDef = twOverrides(
  {
    badge:
      'rounded-radius font-semibold inline-flex items-center transition-all h-auto',
    variants: {
      variant: {
        primary: 'bg-primary text-primary-fg',
        secondary: 'bg-secondary text-secondary-fg',
        muted: 'bg-muted text-muted-fg',
        success: 'bg-success text-success-fg',
        danger: 'bg-danger text-danger-fg',
        warning: 'bg-warning text-warning-fg',
        info: 'bg-info text-info-fg',
        ghost: 'text-foreground',
        link: 'text-foreground underline underline-offset-4',
      },
      size: {
        xs: 'px-1 gap-1 text-[10px] h-5',
        sm: 'px-1.5 gap-1 text-xs h-[22px]',
        md: 'px-2 gap-1 text-xs h-6',
        lg: 'px-3 gap-1.5 text-sm h-8',
        xl: 'px-3 gap-2 text-base h-9',
      },
      outline: {
        primary: `${defaultBorder} border-primary text-primary`,
        secondary: `${defaultBorder} border-secondary text-secondary`,
        muted: `${defaultBorder} border-muted text-muted`,
        success: `${defaultBorder} border-success text-success`,
        danger: `${defaultBorder} border-danger text-danger`,
        warning: `${defaultBorder} border-warning text-warning`,
        info: `${defaultBorder} border-info text-info`,
        ghost: `${defaultBorder} border-primary/25`,
        link: null,
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
