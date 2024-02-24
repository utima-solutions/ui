import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

const defaultBorder = 'bg-none bg-transparent border';

export const badgeDef = twOverrides(
  {
    badge:
      'font-medium inline-flex items-center justify-center border-0 transition-all',
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-fg hover:bg-primary/80 active:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-fg hover:bg-secondary/80 active:bg-secondary/90',
        muted:
          'bg-default text-default-fg hover:bg-default/80 active:bg-default/90',
        success:
          'bg-success text-success-fg hover:bg-success/80 active:bg-success/90',
        danger:
          'bg-danger text-danger-fg hover:bg-danger/80 active:bg-danger/90',
        warning:
          'bg-warning text-warning-fg hover:bg-warning/80 active:bg-warning/90',
        info: 'bg-info text-info-fg hover:bg-info/80 active:bg-info/90',
        ghost: 'text-foreground hover:bg-foreground/5 active:bg-foreground/10',
        link: 'text-foreground hover:text-foreground/70 active:text-foreground/90 underline-offset-4 hover:underline',
      },
      size: {
        md: 'h-5 rounded-md px-2 text-xs',
        sm: 'h-4 rounded px-1.5 text-xs',
        lg: 'h-6 rounded-lg px-4 text-sm',
      },
      outline: {
        primary: `${defaultBorder} border-primary text-primary hover:bg-primary/10 active:bg-primary/15`,
        secondary: `${defaultBorder} border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/15`,
        muted: `${defaultBorder} border-default text-default hover:bg-default/10 active:bg-default/15`,
        success: `${defaultBorder} border-success text-success hover:bg-success/10 active:bg-success/15`,
        danger: `${defaultBorder} border-danger text-danger hover:bg-danger/10 active:bg-danger/15`,
        warning: `${defaultBorder} border-warning text-warning hover:bg-warning/10 active:bg-warning/15`,
        info: `${defaultBorder} border-info text-info hover:bg-info/10 active:bg-info/15`,
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
