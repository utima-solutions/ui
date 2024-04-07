import { Slot } from '@radix-ui/react-slot';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuLinkProps extends ComponentPropsWithoutRef<'a'> {
  asChild?: boolean;
  indent?: boolean;
  active?: boolean;
}

export const MenuLink = memo(function MenuLink({
  children,
  className,
  active = false,
  asChild = false,
  indent = false,
  ...restProps
}: MenuLinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <div className={cn(menuDef.link.wrapper)}>
      <Comp
        className={cn(
          menuDef.link.content,
          indent && menuDef.link.indent,
          active && menuDef.link.active,
          className,
        )}
        {...restProps}
      >
        {children}
      </Comp>
    </div>
  );
});
