import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';

export type DropdownSeparatorProps = ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;

export const DropdownSeparator = forwardRef<HTMLDivElement, DropdownSeparatorProps>(
  function DropdownSeparator({ className, ...props }, ref) {
    const { separator } = dropdownVariants();

    return (
      <DropdownMenuPrimitive.Separator
        ref={ref}
        data-uui-dropdown-separator
        className={cn(separator(), className)}
        {...props}
      />
    );
  },
);
