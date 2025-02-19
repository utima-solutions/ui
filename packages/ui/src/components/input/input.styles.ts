import { tv } from 'tailwind-variants';

// eslint-disable-next-line tailwindcss/no-custom-classname
export const inputVariants = tv({
  slots: {
    base: 'border-input bg-background text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/20 flex h-9 w-full rounded-lg border px-3 py-2 text-sm shadow-sm shadow-black/5 transition-shadow focus-visible:outline-none focus-visible:ring disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none',
  },
  variants: {
    size: {
      xs: 'h-6 px-2 text-xs',
      sm: 'h-7 px-3 text-xs',
      md: 'h-9 text-sm',
      lg: 'h-11 text-base',
    },
    variant: {
      default: '',
      destructive: 'border-destructive focus-visible:ring-destructive/30',
      success: 'border-success focus-visible:ring-success/30',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});
