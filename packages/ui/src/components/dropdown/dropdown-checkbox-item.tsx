import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Check } from 'lucide-react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import type { DropdownSize } from './dropdown-context';

export interface DropdownCheckboxItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> {
  size?: DropdownSize
  classNameIndicator?: string;
}

export const DropdownCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownCheckboxItemProps
>(function DropdownCheckboxItem(
  { className, children, size, classNameIndicator, ...props },
  ref,
) {
  const { checkboxItem } = dropdownVariants({ size });

  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      data-uui-dropdown-checkbox-item
      className={cn(checkboxItem(), className)}
      {...props}
    >
      <span
        data-uui-dropdown-checkbox-item-indicator
        className={cn(
          'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
          classNameIndicator,
        )}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className='size-4' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
