import { useContext, type ComponentPropsWithoutRef, memo } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { LayoutContext, useLayout } from './useLayoutContext';

interface LayoutSidebarProps extends ComponentPropsWithoutRef<'aside'> {
  open?: boolean;
}

export const LayoutSidebar = memo(function LayoutSidebar({
  children,
  className,
  open: forceOpen,
  ...restProps
}: LayoutSidebarProps) {
  const { isSidebarOpened } = useContext(LayoutContext);
  const { hasHeader, sidebarWidth, headerHeight } = useLayout();

  return (
    <aside
      className={cn(
        layoutDef.sidebar.wrapper,
        (forceOpen ?? isSidebarOpened) && 'transform-none',
      )}
      style={{
        width: sidebarWidth,
        paddingTop: hasHeader ? headerHeight : '0px',
      }}
      {...restProps}
    >
      <div className={cn(layoutDef.sidebar.content, className)}>{children}</div>
    </aside>
  );
});
