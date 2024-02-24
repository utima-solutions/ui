import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const checkboxDef = twOverrides(
  {
    checkbox:
      'peer transition-all shrink-0 rounded-sm border border-input-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:bg-input-border/25',
    indicator: 'flex items-center justify-center text-current',
    icon: '',
    iconSize: {
      xs: 'h-2 w-2',
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
    },
    variants: {
      variant: {
        primary:
          'hover:data-[state=checked]:bg-primary/80 active:data-[state=checked]:bg-primary/90 data-[state=checked]:bg-primary data-[state=checked]:text-primary-fg data-[state=checked]:border-primary',
        secondary:
          'hover:data-[state=checked]:bg-secondary/80 active:data-[state=checked]:bg-secondary/90 data-[state=checked]:bg-secondary data-[state=checked]:text-secondary-fg data-[state=checked]:border-secondary',
        muted:
          'hover:data-[state=checked]:bg-muted/80 active:data-[state=checked]:bg-muted/90 data-[state=checked]:bg-muted data-[state=checked]:text-muted-fg data-[state=checked]border:text-muted',
        success:
          'hover:data-[state=checked]:bg-success/80 active:data-[state=checked]:bg-success/90 data-[state=checked]:bg-success data-[state=checked]:text-success-fg data-[state=checked]:border-success',
        danger:
          'hover:data-[state=checked]:bg-danger/80 active:data-[state=checked]:bg-danger/90 data-[state=checked]:bg-danger data-[state=checked]:text-danger-fg data-[state=checked]:border-danger',
        warning:
          'hover:data-[state=checked]:bg-warning/80 active:data-[state=checked]:bg-warning/90 data-[state=checked]:bg-warning data-[state=checked]:text-warning-fg data-[state=checked]:border-warning',
        info: 'hover:data-[state=checked]:bg-info/80 active:data-[state=checked]:bg-info/90 data-[state=checked]:bg-info data-[state=checked]:text-info-fg data-[state=border]:text-info',
      },
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
  },
  'checkbox',
);

export const checkboxStyles = cva(checkboxDef.checkbox, {
  variants: checkboxDef.variants,
});
