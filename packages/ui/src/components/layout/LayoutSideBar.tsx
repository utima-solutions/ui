import { useContext, type ComponentPropsWithoutRef, memo } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { LayoutContext, useLayoutContext } from './useLayoutContext';

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

  const { withSidebar, withHeader } = useLayoutContext();

  if (!withSidebar) {
    return null;
  }

  return (
    <aside
      className={cn(
        withHeader
          ? layoutDef.sideBar.wrapper
          : layoutDef.sideBar.wrapperWithoutHeader,
        (forceOpen ?? open) && 'transform-none',
        className,
      )}
      {...restProps}
    >
      <div className={cn(layoutDef.sideBar.content)}>{children}</div>
    </aside>
  );
});
