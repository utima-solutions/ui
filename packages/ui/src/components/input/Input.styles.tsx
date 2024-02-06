import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const inputDef = twOverrides(
  {
    input:
      'transition-all text-foreground font-normal flex w-full rounded-md border placeholder-placeholder bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:border-foreground disabled:cursor-not-allowed disabled:opacity-60',
    variants: {
      size: {
        sm: 'h-7  px-2 py-1.5 text-xs',
        md: 'h-8 px-3 py-2 text-sm',
        lg: 'h-10 px-3 py-3 text-base',
      },
      variant: {
        default:
          'border-input-border focus-visible:border-foreground hover:border-foreground',
        danger:
          'border-danger focus-visible:border-danger hover:border-danger/30',
        success:
          'border-success focus-visible:border-success hover:border-success/30',
      },
    },
  },
  'input',
);

export const inputStyles = cva(inputDef.input, {
  variants: inputDef.variants,
});
