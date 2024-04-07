import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

/**
 * Style definition for button components.
 */
export const buttonDef = twOverrides(
  {
    button: `${globalDef.ring} outline-none box-border inline-flex font-semibold items-center justify-center rounded-radius transition-all disabled:opacity-65 disabled:cursor-not-allowed`,
    variants: {
      variant: {
        primary:
          'bg-primary border-primary text-primary-fg hover:bg-primary/80 active:bg-primary/90 ring-primary',
        secondary:
          'bg-secondary border-secondary text-secondary-fg hover:bg-secondary/80 active:bg-secondary/90 ring-secondary',
        muted:
          'bg-muted border-muted text-muted-fg hover:bg-muted/80 active:bg-muted/90 ring-muted',
        success:
          'bg-success border-success text-success-fg hover:bg-success/80 active:bg-success/90 ring-success',
        danger:
          'bg-danger border-danger text-danger-fg hover:bg-danger/80 active:bg-danger/90 ring-danger',
        warning:
          'bg-warning border-warning text-warning-fg hover:bg-warning/80 active:bg-warning/90 ring-warning',
        info: 'bg-info border-info text-info-fg hover:bg-info/80 active:bg-info/90 ring-info',
        ghost:
          'text-foreground border-transparent hover:bg-foreground/5 active:bg-foreground/10 ring-foreground',
        link: 'text-foreground hover:text-foreground/70 active:text-foreground/90 underline-offset-4 hover:underline ring-foreground',
      },
      size: {
        xs: 'min-h-7 py-1 px-2 text-xs gap-x-1',
        sm: 'min-h-9 py-1 px-3 text-sm gap-x-1',
        md: 'min-h-10 py-1.5 px-4 text-sm gap-x-1',
        lg: 'min-h-11 py-1.5 px-5 text-base gap-x-1.5',
        xl: 'min-h-12 py-2 px-6 text-lg gap-x-2',
        'icon-xs': 'size-7',
        'icon-sm': 'size-9',
        'icon-md': 'size-10',
        'icon-lg': 'size-11',
        'icon-xl': 'size-12',
      },
      outline: {
        primary: `bg-background border text-primary hover:bg-primary/10 active:bg-primary/15`,
        secondary: `bg-background border text-secondary hover:bg-secondary/10 active:bg-secondary/15`,
        muted: `bg-background border text-default hover:bg-default/10 active:bg-default/15`,
        success: `bg-background border text-success hover:bg-success/10 active:bg-success/15`,
        danger: `bg-background border text-danger hover:bg-danger/10 active:bg-danger/15`,
        warning: `bg-background border text-warning hover:bg-warning/10 active:bg-warning/15`,
        info: `bg-background border text-info hover:bg-info/10 active:bg-info/15`,
        ghost: `bg-background border border-primary/25`,
        link: `bg-background border border-primary`,
      },
    },
  },
  'button',
);

export const buttonStyles = cva(buttonDef.button, {
  variants: buttonDef.variants,
});
