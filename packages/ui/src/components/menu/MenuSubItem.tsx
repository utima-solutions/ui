import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuSubItemProps extends ComponentPropsWithoutRef<'li'> {}

export const MenuSubItem = memo(function MenuSubItem({
  className,
  ...restProps
}: MenuSubItemProps) {
  return <li className={cn(menuDef.subItem, className)} {...restProps} />;
});
