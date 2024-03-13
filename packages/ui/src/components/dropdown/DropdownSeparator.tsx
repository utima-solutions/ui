import { Separator } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownSeparator = forwardRef<
  ElementRef<typeof Separator>,
  ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...restProps }, ref) => (
  <Separator
    ref={ref}
    className={cn(dropdownDef.separator, className)}
    {...restProps}
  />
));
