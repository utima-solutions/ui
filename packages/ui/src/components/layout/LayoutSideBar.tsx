import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';

interface LayoutSideBarProps {
  children: ReactNode;
  className?: string;
}

export function LayoutSideBar({ children, className }: LayoutSideBarProps) {
  return <div className={cn(layoutDef.sideBar, className)}>{children}</div>;
}
