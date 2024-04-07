import { memo, type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuLabelProps extends ComponentPropsWithoutRef<'li'> {
  children: ReactNode;
}

export const MenuLabel = memo(function MenuLabel({
  className,
  ...restProps
}: MenuLabelProps) {
  return (
    <li
      role='presentation'
      className={cn(menuDef.label, className)}
      {...restProps}
    />
  );
});
