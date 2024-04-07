import { ChevronDown } from 'lucide-react';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';
import { useMenuSubContext } from './useMenuSubContext';

export interface MenuSubTrigger extends ComponentPropsWithoutRef<'div'> {}

export const MenuSubTrigger = memo(function MenuSubTrigger({
  children,
  className,
  ...restProps
}: MenuSubTrigger) {
  const { opened, setOpened } = useMenuSubContext();

  return (
    <div className={cn(menuDef.subTrigger.wrapper, className)} {...restProps}>
      <span className={menuDef.subTrigger.content}>{children}</span>
      <button
        onClick={() => setOpened(v => !v)}
        className={menuDef.subTrigger.button}
      >
        <ChevronDown
          className={cn(menuDef.subTrigger.icon, opened && '-scale-y-100')}
        />
      </button>
    </div>
  );
});
