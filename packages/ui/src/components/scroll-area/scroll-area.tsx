import {
  forwardRef,
  type ComponentRef,
  type ComponentPropsWithoutRef,
} from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/utils';

export interface ScrollAreaProps
  extends ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  classNameViewport?: string;
}

export const ScrollArea = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, classNameViewport, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    data-uui-scroll-area
    className={cn('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      data-uui-scroll-area-viewport
      className={cn('h-full w-full rounded-[inherit]', classNameViewport)}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar data-uui-scroll-area-scrollbar />
    <ScrollAreaPrimitive.Corner data-uui-scroll-area-corner />
  </ScrollAreaPrimitive.Root>
));

export const ScrollBar = forwardRef<
  ComponentRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    data-uui-scroll-area-scrollbar
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' &&
        'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      data-uui-scroll-area-scrollbar-thumb
      className='relative flex-1 rounded-full bg-border'
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
