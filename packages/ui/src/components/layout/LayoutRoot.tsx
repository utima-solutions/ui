import { type ComponentPropsWithoutRef, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { LayoutContext, type LayoutContextType } from './useLayoutContext';

interface LayoutRootProps extends ComponentPropsWithoutRef<'div'> {
  hasSidebar?: boolean;
  hasHeader?: boolean;
  headerHeight?: number | string;
  sidebarWidth?: number | string;
}

function getLayoutValue(value: number | string): string {
  if (typeof value === 'string') {
    return value;
  }

  return `${value}px`;
}

export function LayoutRoot({
  className,
  hasSidebar,
  hasHeader,
  headerHeight,
  sidebarWidth,
  ...restProps
}: LayoutRootProps) {
  const [open, setOpen] = useState(false);
  const contextValue = useMemo<LayoutContextType>(
    () => ({
      isSidebarOpened: open,
      setSidebarOpened: setOpen,
      hasSidebar: !!(hasSidebar ?? true),
      hasHeader: !!(hasHeader ?? true),
      headerHeight: getLayoutValue(headerHeight ?? 64),
      sidebarWidth: getLayoutValue(sidebarWidth ?? 256),
    }),
    [open, hasSidebar, hasHeader, headerHeight, sidebarWidth],
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={cn(layoutDef.root, className)} {...restProps} />
    </LayoutContext.Provider>
  );
}
