import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { useLayout } from './useLayoutContext';

export const LayoutContent = memo(function LayoutContent({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  const {
    hasSidebar,
    hasHeader,
    sidebarWidth,
    headerHeight,
    isSidebarOpened,
    setSidebarOpened,
  } = useLayout();

  return (
    <>
      <div
        onClick={() => setSidebarOpened(false)}
        className={cn(
          layoutDef.content.overlay,
          isSidebarOpened && 'opacity-1 pointer-events-auto',
        )}
      />
      <main
        className={cn(layoutDef.content.base, className)}
        style={{
          marginLeft: hasSidebar ? sidebarWidth : '0px',
          marginTop: hasHeader ? headerHeight : '0px',
          height: `calc(100vh - ${headerHeight})`,
        }}
        {...restProps}
      />
    </>
  );
});
