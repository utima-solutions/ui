import { ItemIndicator, RadioItem } from '@radix-ui/react-dropdown-menu';
import { Circle } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownRadioItemProps = ComponentPropsWithoutRef<typeof RadioItem>;

export const DropdownRadioItem = forwardRef<
  ElementRef<typeof RadioItem>,
  DropdownRadioItemProps
>(({ className, children, ...props }, ref) => (
  <RadioItem
    ref={ref}
    className={cn(dropdownDef.radio.item, className)}
    {...props}
  >
    <span className={dropdownDef.radio.indicator}>
      <ItemIndicator>
        <Circle className={dropdownDef.radio.icon} />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
));
