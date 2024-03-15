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

  const { withHeader, sideBarWidth, headerHeight } = useLayoutContext();

  return (
    <aside
      className={cn(
        layoutDef.sideBar.wrapper,
        (forceOpen ?? open) && 'transform-none',
        className,
      )}
      style={{
        width: sideBarWidth ? `${sideBarWidth}px` : '256px',
        paddingTop: withHeader ? `${headerHeight}px` : '0px',
      }}
      {...restProps}
    >
      <div className={cn(layoutDef.sideBar.content)}>{children}</div>
    </aside>
  );
});
