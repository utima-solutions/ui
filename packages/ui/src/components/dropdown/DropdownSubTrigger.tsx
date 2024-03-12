import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  ComponentPropsWithoutRef<typeof SubTrigger>
>(({ className, children, ...restProps }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(dropdownDef.subTrigger.trigger, className)}
    {...restProps}
  >
    {children}
    <ChevronRight className={dropdownDef.subTrigger.icon} />
  </SubTrigger>
));
