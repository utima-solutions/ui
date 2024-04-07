import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

export interface MenuRootProps extends ComponentPropsWithoutRef<'nav'> {}

export const MenuRoot = memo(function MenuRoot({
  className,
  ...restProps
}: MenuRootProps) {
  return <nav className={cn('bg-menu', className)} {...restProps} />;
});
