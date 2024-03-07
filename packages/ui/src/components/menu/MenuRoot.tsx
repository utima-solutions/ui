import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { menuDef } from './Menu.styles';

interface MenuRootProps {
  children: ReactNode;
  className?: string;
}

export function MenuRoot({ children, className }: MenuRootProps) {
  return <div className={ cn(menuDef.root, className)}>{children}</div>;
}
