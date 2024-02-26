import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

const defaultBorder = 'bg-none bg-transparent border border-inset';

/**
 * Style definition for button components.
 */
export const buttonDef = twOverrides(
  {
    button: `${globalDef.ring} box-border inline-flex font-semibold items-center justify-center rounded-radius border-0 transition-all disabled:opacity-65 disabled:cursor-not-allowed`,
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-fg hover:bg-primary/80 active:bg-primary/90 ring-primary',
        secondary:
          'bg-secondary text-secondary-fg hover:bg-secondary/80 active:bg-secondary/90 ring-secondary',
        muted:
          'bg-muted text-muted-fg hover:bg-muted/80 active:bg-muted/90 ring-muted',
        success:
          'bg-success text-success-fg hover:bg-success/80 active:bg-success/90 ring-success',
        danger:
          'bg-danger text-danger-fg hover:bg-danger/80 active:bg-danger/90 ring-danger',
        warning:
          'bg-warning text-warning-fg hover:bg-warning/80 active:bg-warning/90 ring-warning',
        info: 'bg-info text-info-fg hover:bg-info/80 active:bg-info/90 ring-info',
        ghost:
          'text-foreground hover:bg-foreground/5 active:bg-foreground/10 ring-foreground',
        link: 'text-foreground hover:text-foreground/70 active:text-foreground/90 underline-offset-4 hover:underline ring-foreground',
      },
      size: {
        xs: 'h-7 px-2 text-xs gap-x-1',
        sm: 'h-8 px-3 text-sm gap-x-1',
        md: 'h-9 px-4 py-2 text-sm gap-x-1',
        lg: 'h-10 px-4 text-base gap-x-1.5',
        xl: 'h-12 px-5 text-lg gap-x-2',
        'icon-xs': 'size-7',
        'icon-sm': 'size-8',
        'icon-md': 'size-9',
        'icon-lg': 'size-10',
        'icon-xl': 'size-12',
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
    },
  },
  'button',
);

export const buttonStyles = cva(buttonDef.button, {
  variants: buttonDef.variants,
});
