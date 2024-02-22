import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

type DropdownCheckboxItemProps = ComponentPropsWithoutRef<typeof CheckboxItem>;

export const DropdownCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  DropdownCheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <CheckboxItem
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
      <ItemIndicator>
        <Check className='h-4 w-4' />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
));
