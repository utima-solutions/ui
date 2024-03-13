import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const kbdDef = twOverrides(
  {
    kbd: 'rounded-radius ml-auto tracking-wide',
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      variant: {
        default: 'opacity-60 tracking-widest',
        bordered: 'shadow-sm bg-white py-0.5 px-1 border-border border',
      },
    },
  },
  'dropdown',
);

export const kbdStyles = cva(kbdDef.kbd, {
  variants: kbdDef.variants,
});
