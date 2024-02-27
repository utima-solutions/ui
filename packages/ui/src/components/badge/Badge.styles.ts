import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

const defaultBorder = 'bg-none bg-transparent border';

export const badgeDef = twOverrides(
  {
    badge:
      'border rounded-radius font-semibold inline-flex items-center transition-all h-auto',
    variants: {
      variant: {
        primary: 'bg-primary border-primary text-primary-fg',
        secondary: 'bg-secondary border-secondary text-secondary-fg',
        muted: 'bg-muted border-muted text-muted-fg',
        success: 'bg-success border-success text-success-fg',
        danger: 'bg-danger border-danger text-danger-fg',
        warning: 'bg-warning border-warning text-warning-fg',
        info: 'bg-info border-info text-info-fg',
        ghost: 'border-transparent text-foreground',
        link: 'border-transparent text-foreground underline underline-offset-4',
      },
      size: {
        xs: 'px-1 gap-1 text-[10px] py-0.5',
        sm: 'px-1.5 gap-1 text-xs py-0.5',
        md: 'px-2 gap-1 text-xs py-1',
        lg: 'px-3 gap-1.5 text-sm py-1.5',
        xl: 'px-3 gap-2 text-base py-1.5',
      },
      outline: {
        primary: `${defaultBorder} text-primary`,
        secondary: `${defaultBorder} text-secondary`,
        muted: `${defaultBorder} text-muted`,
        success: `${defaultBorder} text-success`,
        danger: `${defaultBorder} text-danger`,
        warning: `${defaultBorder} text-warning`,
        info: `${defaultBorder} text-info`,
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
