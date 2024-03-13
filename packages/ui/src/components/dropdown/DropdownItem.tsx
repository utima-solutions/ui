import { Item } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, ...restProps }, ref) => (
  <Item ref={ref} className={cn(dropdownDef.item, className)} {...restProps} />
));
