import { memo, useContext, type ComponentPropsWithoutRef } from 'react';
import AnimateHeight from 'react-animate-height';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';
import { MenuSubContext, type MenuSubContextType } from './menuSubContext';

export interface MenuSubContentProps extends ComponentPropsWithoutRef<'ul'> {}

export const MenuSubContent = memo(function MenuSubContent({
  className,
  ...restProps
}: MenuSubContentProps) {
  const { opened } = useContext<MenuSubContextType>(MenuSubContext);

  return (
    <AnimateHeight
      easing='ease-in-out'
      duration={300}
      disableDisplayNone
      height={opened ? 'auto' : 0}
    >
      <div className={menuDef.subContent.wrapper}>
        <ul
          className={cn(
            menuDef.subContent.content,
            opened ? 'opacity-100' : 'opacity-0',
            className,
          )}
          {...restProps}
        />
      </div>
    </AnimateHeight>
  );
});
