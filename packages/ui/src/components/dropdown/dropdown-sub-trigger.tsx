import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { ChevronRight } from 'lucide-react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import type { DropdownSize } from './dropdown-context';
export interface DropdownSubTriggerProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> {
  size?: DropdownSize;
  inset?: boolean;
}

export const DropdownSubTrigger = forwardRef<HTMLDivElement, DropdownSubTriggerProps>(
  function DropdownSubTrigger({ className, inset, children, size, ...props }, ref) {
    const { subTrigger } = dropdownVariants({ size });

    return (
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        data-uui-dropdown-sub-trigger
        className={cn(subTrigger(), inset && 'pl-8', className)}
        {...props}
      >
        {children}
        <ChevronRight className='ml-auto size-4' />
      </DropdownMenuPrimitive.SubTrigger>
    );
  },
);
