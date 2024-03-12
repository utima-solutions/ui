import { Portal, Content } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...restProps }, ref) => (
  <Portal>
    <Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownDef.content, className)}
      {...restProps}
    />
  </Portal>
));
