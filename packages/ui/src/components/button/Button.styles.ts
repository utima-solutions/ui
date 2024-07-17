import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

/**
 * Style definition for button components.
 */
export const buttonDef = twOverrides(
  {
    button: `$outline-none ring-ring focus:ring-2 focus:ring-offset-2 focus:outline-none outline-none box-border inline-flex font-medium items-center justify-center rounded-md transition-all disabled:opacity-65 disabled:cursor-not-allowed`,
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-primary-fg hover:bg-primary-400 active:bg-primary-500 ring-primary-500',
        secondary:
          'bg-secondary-500 text-secondary-fg hover:bg-secondary-400 active:bg-secondary-500 ring-secondary-500',
        success:
          'bg-success-500 text-success-fg hover:bg-success-400 active:bg-success-500 ring-success-500',
        danger:
          'bg-danger-500 text-danger-fg hover:bg-danger-400 active:bg-danger-500 ring-danger-500',
        warning:
          'bg-warning-500 text-warning-fg hover:bg-warning-400 active:bg-warning-500 ring-warning-500',
        info: 'bg-info-500 text-info-fg hover:bg-info-400 active:bg-info-500 ring-info-500',
        ghost:
          'text-foreground border-transparent hover:bg-foreground/5 active:bg-foreground/10 ring-foreground',
        link: 'text-foreground hover:text-foreground/70 active:text-foreground/90 underline-offset-4 hover:underline ring-foreground',
      },
      size: {
        xs: 'min-h-7 py-1 px-2 text-xs gap-x-1 rounded-sm',
        sm: 'min-h-9 py-1 px-3 text-sm gap-x-1',
        md: 'min-h-10 py-1.5 px-4 text-sm gap-x-1',
        lg: 'min-h-11 py-1.5 px-5 text-base gap-x-1.5 rounded-lg',
        xl: 'min-h-13 py-2 px-6 text-lg gap-x-2 rounded-lg',
        'icon-xs': 'size-7',
        'icon-sm': 'size-9',
        'icon-md': 'size-10',
        'icon-lg': 'size-11',
        'icon-xl': 'size-13',
      },
      outline: {
        primary: `bg-background border border-primary-500 text-primary-600 hover:bg-primary-300/15 active:bg-primary-300/20`,
        secondary: `bg-background border border-secondary-500 text-secondary-600 hover:bg-secondary-300/15 active:bg-secondary-300/20`,
        success: `bg-background border border-success-500 text-success-600 hover:bg-success-300/15 active:bg-success-300/20`,
        danger: `bg-background border border-danger-500 text-danger-600 hover:bg-danger-300/15 active:bg-danger-300/20`,
        warning: `bg-background border border-warning-500 text-warning-600 hover:bg-warning-300/15 active:bg-warning-300/20`,
        info: `bg-background border border-info-500 text-info-600 hover:bg-info-300/15 active:bg-info-300/20`,
        ghost: `bg-background border border-foreground/25`,
        link: `bg-background border border-primary-500`,
      },
    },
  },
  'button',
);

export const buttonStyles = cva(buttonDef.button, {
  variants: buttonDef.variants,
});
