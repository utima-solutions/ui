import { Root } from '@radix-ui/react-label';
import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentProps, type ElementRef } from 'react';

import { cn } from '@/utils';

import { labelStyles } from './Label.styles';

type LabelProps = Omit<ComponentProps<typeof Root>, 'size'> &
  VariantProps<typeof labelStyles>;

export const Label = forwardRef<ElementRef<typeof Root>, LabelProps>(
  function Label({ className, size = 'md', ...restProps }, ref) {
    return (
      <Root
        ref={ref}
        className={cn(labelStyles({ size }), className)}
        {...restProps}
      />
    );
  },
);
