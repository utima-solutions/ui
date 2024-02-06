import { Separator } from '@radix-ui/react-select';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef } from './select.styles';

export const SelectSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(function SelectSeparator({ className, ...props }, ref) {
  return (
    <Separator
      ref={ref}
      className={cn(selectDef.separator, className)}
      {...props}
    />
  );
});
