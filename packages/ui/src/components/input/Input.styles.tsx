import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

export const inputDef = twOverrides(
  {
    wrapper: 'flex items-center',
    container: 'w-full relative flex items-center',
    input: `${globalDef.ring} ring-input-border peer transition-all text-input-fg font-normal flex w-full rounded-radius border placeholder-placeholder bg-input focus:border-input-fg disabled:cursor-not-allowed disabled:opacity-60`,
    addon: {
      base: 'inline-flex items-center justify-center bg-accent w-fit',
      before: 'rounded-l-radius rounded-r-none border-r-0',
      after: 'rounded-r-radius rounded-l-none border-l-0',
    },
    passwordPreview: {
      button:
        'absolute top-auto right-3 text-primary hover:text-primary/65 transition-colors',
      icon: 'size-5',
    },
    variants: {
      size: {
        xs: 'h-6 px-2 py-1.5 text-xs',
        sm: 'h-7 px-2 py-1.5 text-xs',
        md: 'h-9 px-3 py-2 text-sm',
        lg: 'h-11 px-3 py-3 text-base',
      },
      iconSize: {
        xs: 'size-3',
        sm: 'size-4',
        md: 'size-5',
        lg: 'size-6',
      },
      variant: {
        default:
          'border-input-border focus:border-input-fg hover:border-input-fg',
        danger: 'border-danger focus:border-danger hover:border-danger/30',
        success: 'border-success focus:border-success hover:border-success/30',
        warning: 'border-warning focus:border-warning hover:border-warning/30',
        info: 'border-info focus:border-info hover:border-info/30',
      },
    },
  },
  'input',
);

export const inputStyles = cva(inputDef.input, {
  variants: inputDef.variants,
});
