import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

type DropdownSubTriggerProps = ComponentPropsWithoutRef<typeof SubTrigger> & {
  inset?: boolean;
};

export const DropdownSubTrigger = forwardRef<
  ElementRef<typeof SubTrigger>,
  DropdownSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      inset && 'pl-8',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className='ml-auto h-4 w-4' />
  </SubTrigger>
));
