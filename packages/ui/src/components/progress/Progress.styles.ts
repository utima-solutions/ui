import { cva } from 'class-variance-authority';

import { twOverrides } from '@/overrides';

export const progressDef = twOverrides(
  {
    progress: `relative w-full overflow-hidden rounded-radius bg-border`,
    indicator:
      'h-full w-full flex-1 bg-primary transition-all ease-in-out duration-300',
    variants: {
      variant: {
        primary: 'bg-primary ',
        secondary: 'bg-secondary ',
        muted: 'bg-muted ',
        success: 'bg-success ',
        danger: 'bg-danger ',
        warning: 'bg-warning ',
        info: 'bg-info ',
      },
      size: {
        xs: 'h-2',
        sm: 'h-3',
        md: 'h-4',
        lg: 'h-6',
        xl: 'h-8',
      },
      outline: {
        primary: `bg-background border border-primary`,
        secondary: `bg-background border border-secondary`,
        muted: `bg-background border border-muted`,
        success: `bg-background border border-success`,
        danger: `bg-background border border-danger`,
        warning: `bg-background border border-warning`,
        info: `bg-background border border-info`,
      },
    },
  },
  'progress',
);

export const progressStyles = cva(progressDef.progress, {
  variants: progressDef.variants,
});
