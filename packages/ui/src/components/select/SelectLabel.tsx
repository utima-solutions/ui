import { Label } from '@radix-ui/react-select';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef } from './select.styles';

export const SelectLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(function SelectLabel({ className, ...props }, ref) {
  return (
    <Label ref={ref} className={cn(selectDef.label, className)} {...props} />
  );
});
