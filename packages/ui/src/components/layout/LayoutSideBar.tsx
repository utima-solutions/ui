import { useContext, type ComponentPropsWithoutRef, memo } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { LayoutContext } from './useLayoutContext';

interface LayoutSideBarProps extends ComponentPropsWithoutRef<'aside'> {
  open?: boolean;
}

export const LayoutSideBar = memo(function LayoutSideBar({
  children,
  className,
  open: forceOpen,
  ...restProps
}: LayoutSideBarProps) {
  const { open } = useContext(LayoutContext);

  return (
    <aside
      className={cn(
        layoutDef.sideBar.wrapper,
        (forceOpen ?? open) && 'transform-none',
        className,
      )}
      {...restProps}
    >
      <div className={cn(layoutDef.sideBar.content)}>{children}</div>
    </aside>
  );
});
