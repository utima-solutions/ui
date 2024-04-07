import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuLinkProps extends ComponentPropsWithoutRef<'a'> {}

export const MenuLink = memo(function MenuLink({
  children,
  className,
  ...restProps
}: MenuLinkProps) {
  return (
    <div className={cn(menuDef.link.wrapper)}>
      <a className={cn(menuDef.link.content, className)} {...restProps}>
        {children}
      </a>
    </div>
  );
});
