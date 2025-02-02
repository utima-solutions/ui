import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import { useDropdown, type DropdownSize } from './dropdown-context';

export interface DropdownItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> {
  size?: DropdownSize;
  inset?: boolean;
}

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  function DropdownItem({ className, children, size: sizeProp, inset, ...props }, ref) {
    const { size: contextSize } = useDropdown();
    const { item } = dropdownVariants({ size: sizeProp ?? contextSize });

    return (
      <DropdownMenuPrimitive.Item
        ref={ref}
        data-uui-dropdown-item
        className={cn(item(), inset && 'pl-8', className)}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Item>
    );
  },
);
