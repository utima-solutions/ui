import { Label } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

type DropdownLabelProps = ComponentPropsWithoutRef<typeof Label> & {
  inset?: boolean;
};

export const DropdownLabel = forwardRef<
  ElementRef<typeof Label>,
  DropdownLabelProps
>(({ className, inset, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
));
