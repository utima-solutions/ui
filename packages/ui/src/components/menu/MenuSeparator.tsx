import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuSeparatorProps extends ComponentPropsWithoutRef<'li'> {}

export const MenuSeparator = memo(function MenuSeparator({
  className,
  ...restProps
}: MenuSeparatorProps) {
  return (
    <li
      className={cn(menuDef.separator, className)}
      role='separator'
      {...restProps}
    />
  );
});
