import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import { useDropdown, type DropdownSize } from './dropdown-context';
export interface DropdownLabelProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> {
  size?: DropdownSize;
  inset?: boolean;
}

export const DropdownLabel = forwardRef<HTMLDivElement, DropdownLabelProps>(
  function DropdownLabel({ className, inset, size, ...props }, ref) {
    const { size: contextSize } = useDropdown();
    const { label } = dropdownVariants({ size: size ?? contextSize });

    return (
      <DropdownMenuPrimitive.Label
        ref={ref}
        data-uui-dropdown-label
        className={cn(label(), inset && 'pl-8', className)}
        {...props}
      />
    );
  },
);
