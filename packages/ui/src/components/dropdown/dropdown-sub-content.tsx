import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import type { DropdownSize } from './dropdown-context';
export interface DropdownSubContentProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> {
  size?: DropdownSize;
}

export const DropdownSubContent = forwardRef<HTMLDivElement, DropdownSubContentProps>(
  function DropdownSubContent({ className, size, ...props }, ref) {
    const { subContent } = dropdownVariants({ size });

    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.SubContent
          ref={ref}
          data-uui-dropdown-sub-content
          className={cn(subContent(), className)}
          {...props}
        />
      </DropdownMenuPrimitive.Portal>
    );
  },
);
