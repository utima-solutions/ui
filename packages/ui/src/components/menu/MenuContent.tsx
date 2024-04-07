import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

export interface MenuContentProps extends ComponentPropsWithoutRef<'ul'> {}

export const MenuContent = memo(function MenuContent({
  className,
  ...restProps
}: MenuContentProps) {
  return <ul className={cn(menuDef.content, className)} {...restProps} />;
});
