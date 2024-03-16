import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { useLayout } from './useLayoutContext';

export const LayoutHeader = memo(function LayoutHeader({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'header'>) {
  const { headerHeight } = useLayout();

  return (
    <header
      className={cn(layoutDef.header, className)}
      style={{ height: headerHeight }}
      {...restProps}
    />
  );
});
