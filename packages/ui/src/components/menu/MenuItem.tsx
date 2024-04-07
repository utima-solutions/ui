import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuItemProps extends ComponentPropsWithoutRef<'li'> {}

export const MenuItem = memo(function MenuItem({
  className,
  ...restProps
}: MenuItemProps) {
  return <li className={cn(menuDef.item, className)} {...restProps} />;
});
