import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';
import { useLayoutContext } from './useLayoutContext';

export const LayoutHeader = memo(function LayoutHeader({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'header'>) {
  const { withHeader } = useLayoutContext();

  if (!withHeader) {
    return null;
  }

  return <header className={cn(layoutDef.header, className)} {...restProps} />;
});
