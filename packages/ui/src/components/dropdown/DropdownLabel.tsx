import { Label } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownLabelProps = ComponentPropsWithoutRef<typeof Label>;

export const DropdownLabel = forwardRef<
  ElementRef<typeof Label>,
  DropdownLabelProps
>(({ className, ...restProps }, ref) => (
  <Label
    ref={ref}
    className={cn(dropdownDef.label, className)}
    {...restProps}
  />
));
