import { Item } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownItemProps = ComponentPropsWithoutRef<typeof Item>;

export const DropdownItem = forwardRef<
  ElementRef<typeof Item>,
  DropdownItemProps
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={cn(dropdownDef.item, className)} {...props} />
));
