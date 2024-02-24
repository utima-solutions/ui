import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const labelDef = twOverrides(
  {
    label:
      'cursor-pointer text-foreground font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    variants: {
      size: {
        xs: 'text-xs leading-3',
        sm: 'text-xs leading-4',
        md: 'text-sm text-sm leading-5',
        lg: 'text-base leading-6',
        xl: 'text-lg leading-7',
      },
    },
  },
  'label',
);

export const labelStyles = cva(labelDef.label, {
  variants: labelDef.variants,
});
