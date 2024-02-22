import { Separator } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

type DropdownSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const DropdownSeparator = forwardRef<
  ElementRef<typeof Separator>,
  DropdownSeparatorProps
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
