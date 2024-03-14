import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';

export const LayoutHeader = memo(function LayoutHeader({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'header'>) {
  return <header className={cn(layoutDef.header, className)} {...restProps} />;
});
