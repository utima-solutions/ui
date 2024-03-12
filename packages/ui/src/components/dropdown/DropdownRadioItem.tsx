import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  ComponentPropsWithoutRef<typeof RadioItem>
>(({ className, children, ...restProps }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(dropdownDef.radio.item, className)}
    {...restProps}
  >
    <span className={dropdownDef.radio.indicator}>
      <ItemIndicator>
        <Circle className={dropdownDef.radio.icon} />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
