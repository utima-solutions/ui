import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Circle } from 'lucide-react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import type { DropdownSize } from './dropdown-context';

export interface DropdownRadioItemProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> {
  size?: DropdownSize;
}

export const DropdownRadioItem = forwardRef<HTMLDivElement, DropdownRadioItemProps>(
  function DropdownRadioItem({ className, children, size, ...props }, ref) {
    const { radioItem } = dropdownVariants({ size });

    return (
      <DropdownMenuPrimitive.RadioItem
        ref={ref}
        data-uui-dropdown-radio-item
        className={cn(radioItem(), className)}
        {...props}
      >
        <span className='absolute left-2 flex h-3.5 w-3.5 items-center justify-center'>
          <DropdownMenuPrimitive.ItemIndicator>
            <Circle className='size-2 fill-current' />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
      </DropdownMenuPrimitive.RadioItem>
    );
  },
);
