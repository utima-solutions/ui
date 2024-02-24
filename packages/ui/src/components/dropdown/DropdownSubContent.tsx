import { Portal, SubContent } from '@radix-ui/react-dropdown-menu';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownSubContentProps = ComponentPropsWithoutRef<typeof SubContent>;

export const DropdownSubContent = forwardRef<
  ElementRef<typeof SubContent>,
  DropdownSubContentProps
>(({ className, ...restProps }, ref) => (
  <Portal>
    <SubContent
      ref={ref}
      className={cn(dropdownDef.subContent, className)}
      {...restProps}
    />
  </Portal>
));
