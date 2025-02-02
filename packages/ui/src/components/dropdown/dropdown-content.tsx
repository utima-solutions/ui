import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';
import { dropdownVariants } from './dropdown';
import { useDropdown, type DropdownSize } from './dropdown-context';

export interface DropdownContentProps
  extends ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> {
  size?: DropdownSize;
}

export const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  function DropdownContent({ className, size: sizeProp, ...props }, ref) {
    const { size: contextSize } = useDropdown();
    const { content } = dropdownVariants({ size: sizeProp ?? contextSize });

    return (
      <DropdownMenuPrimitive.Content
        ref={ref}
        data-uui-dropdown-content
        className={cn(content(), className)}
        {...props}
      />
    );
  },
);
