import { Separator } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const DropdownSeparator = forwardRef<
  ElementRef<typeof Separator>,
  DropdownSeparatorProps
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn(dropdownDef.separator, className)}
    {...props}
  />
));
