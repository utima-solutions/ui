import { Label } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...restProps }, ref) => (
  <Label
    ref={ref}
    className={cn(dropdownDef.label, className)}
    {...restProps}
  />
));
