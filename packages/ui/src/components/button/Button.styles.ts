import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

const defaultBorder = 'bg-none bg-transparent border';

/**
 * Style definition for button components.
 */
export const buttonDef = twOverrides(
  {
    button:
      'inline-flex focus:ring-2 focus:ring-offset-1 items-center justify-center rounded-md border-0 focus:outline-none transition-all disabled:opacity-65',
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-fg hover:bg-primary/80 active:bg-primary/90 ring-primary/35',
        secondary:
          'bg-secondary text-secondary-fg hover:bg-secondary/80 active:bg-secondary/90 ring-secondary/35',
        accent:
          'bg-accent text-accent-fg hover:bg-accent/80 active:bg-accent/90 ring-accent/35',
        success:
          'bg-success text-success-fg hover:bg-success/80 active:bg-success/90 ring-success/35',
        danger:
          'bg-danger text-danger-fg hover:bg-danger/80 active:bg-danger/90 ring-danger/35',
        warning:
          'bg-warning text-warning-fg hover:bg-warning/80 active:bg-warning/90 ring-warning/35',
        ghost:
          'text-foreground hover:bg-foreground/5 active:bg-foreground/10 ring-foreground/70',
        link: 'text-foreground hover:text-foreground/70 active:text-foreground/90 underline-offset-4 hover:underline ring-foreground/70',
      },
      size: {
        xs: 'h-7 rounded-md px-2 text-xs',
        sm: 'h-8 rounded-md px-3 text-sm',
        md: 'h-9 px-4 py-2 text-sm gap-x-1',
        lg: 'h-10 rounded-lg px-4 text-base gap-x-1.5',
        icon: 'h-9 w-9',
      },
      outline: {
        primary: `${defaultBorder} border-primary text-primary hover:bg-primary/10 active:bg-primary/15`,
        secondary: `${defaultBorder} border-secondary text-secondary hover:bg-secondary/10 active:bg-secondary/15`,
        accent: `${defaultBorder} border-accent text-accent hover:bg-accent/10 active:bg-accent/15`,
        success: `${defaultBorder} border-success text-success hover:bg-success/10 active:bg-success/15`,
        danger: `${defaultBorder} border-danger text-danger hover:bg-danger/10 active:bg-danger/15`,
        warning: `${defaultBorder} border-warning text-warning hover:bg-warning/10 active:bg-warning/15`,
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
