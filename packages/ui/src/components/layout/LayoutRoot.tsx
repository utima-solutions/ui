import { type ComponentPropsWithoutRef, useMemo, useState } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { LayoutContext, type LayoutContextType } from './useLayoutContext';

interface LayoutRootProps extends ComponentPropsWithoutRef<'div'> {
  withSidebar?: boolean;
  withHeader?: boolean;
  headerHeight?: number;
  sideBarWidth?: number;
}

export function LayoutRoot({
  className,
  withSidebar,
  withHeader,
  headerHeight,
  sideBarWidth,
  ...restProps
}: LayoutRootProps) {
  const [open, setOpen] = useState(false);
  const contextValue = useMemo<LayoutContextType>(
    () => ({
      open,
      setOpen,
      withSidebar: !!(withSidebar ?? true),
      withHeader: !!(withHeader ?? true),
      headerHeight: headerHeight ?? 64,
      sideBarWidth: sideBarWidth ?? 256,
    }),
    [open, withSidebar, withHeader, headerHeight, sideBarWidth],
  );

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className={cn(layoutDef.root, className)} {...restProps} />
    </LayoutContext.Provider>
  );
}
