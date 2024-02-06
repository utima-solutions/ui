import {
  Content,
  Viewport,
  Portal,
  ScrollUpButton,
  ScrollDownButton,
} from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef } from './select.styles';

export const SelectContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(function SelectContent(
  { className, children, position = 'popper', ...restProps },
  ref,
) {
  return (
    <Portal>
      <Content
        ref={ref}
        className={cn(
          selectDef.content.base,
          position === 'popper' && selectDef.content.popper,
          className,
        )}
        position={position}
        {...restProps}
      >
        <ScrollUpButton className='flex cursor-default items-center justify-center py-1'>
          <ChevronUpIcon size={16} />
        </ScrollUpButton>
        <Viewport className={cn(selectDef.viewport.base)}>{children}</Viewport>
        <ScrollDownButton className='flex cursor-default items-center justify-center py-1'>
          <ChevronDownIcon size={16} />
        </ScrollDownButton>
      </Content>
    </Portal>
  );
});
