import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

interface MenuItemProps {
  children: ReactNode;
  className?: string;
  icon? : ReactNode;
}

export function MenuItem({ children, className }: MenuItemProps) {
  return (
    <div className={cn(menuDef.item.root, className)}>
      {children}
    </div>
  );
}
