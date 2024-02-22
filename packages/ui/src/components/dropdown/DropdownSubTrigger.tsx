import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownSubTriggerProps = ComponentPropsWithoutRef<typeof SubTrigger>;

export const DropdownSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  DropdownSubTriggerProps
>(({ className, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(dropdownDef.subTrigger.trigger, className)}
    {...props}
  >
    {children}
    <ChevronRight className={dropdownDef.subTrigger.icon} />
  </SubTrigger>
));
