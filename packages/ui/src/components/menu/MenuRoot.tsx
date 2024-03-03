import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

interface MenuRootProps {
  children: ReactNode;
  column: boolean;
  className?: string;
}

export function MenuRoot({ children, className, column }: MenuRootProps) {
  return <div className={ cn(column ? menuDef.rootCol : menuDef.rootRow, className)}>{children}</div>;
}
