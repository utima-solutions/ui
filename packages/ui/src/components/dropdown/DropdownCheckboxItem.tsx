import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownCheckboxItemProps = ComponentPropsWithoutRef<typeof CheckboxItem>;

export const DropdownCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  DropdownCheckboxItemProps
>(({ className, children, checked, ...restProps }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(dropdownDef.checkbox.item, className)}
    checked={checked}
    {...restProps}
  >
    <span className={dropdownDef.checkbox.indicator}>
      <ItemIndicator>
        <Check className={dropdownDef.checkbox.icon} />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));
