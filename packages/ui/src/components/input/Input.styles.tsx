import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const inputDef = twOverrides(
  {
    input:
      'peer transition-all text-input-fg font-normal flex w-full rounded-md border placeholder-placeholder bg-input ring-offset-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-border focus:ring-offset-1 focus-visible:border-input-fg disabled:cursor-not-allowed disabled:opacity-60',
    variants: {
      size: {
        xs: 'h-6 px-2 py-1.5 text-xs',
        sm: 'h-7 px-2 py-1.5 text-xs',
        md: 'h-9 px-3 py-2 text-sm',
        lg: 'h-11 px-3 py-3 text-base',
      },
      variant: {
        default:
          'border-input-border focus-visible:border-input-fg hover:border-input-fg',
        danger:
          'border-danger focus-visible:border-danger hover:border-danger/30',
        success:
          'border-success focus-visible:border-success hover:border-success/30',
        warning:
          'border-warning focus-visible:border-warning hover:border-warning/30',
        info: 'border-info focus-visible:border-info hover:border-info/30',
      },
    },
  },
  'input',
);

export const inputStyles = cva(inputDef.input, {
  variants: inputDef.variants,
});
