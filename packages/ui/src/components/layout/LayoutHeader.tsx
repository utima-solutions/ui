import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';

interface LayoutHeaderProps {
  children: ReactNode;
  className?: string;
}

export function LayoutHeader({ children, className }: LayoutHeaderProps) {
  return <div className={cn(layoutDef.header, className)}>{children}</div>;
}
