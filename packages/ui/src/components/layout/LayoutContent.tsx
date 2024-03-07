import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';

interface LayoutContentProps {
  children: ReactNode;
  className?: string;
}

export function LayoutContent({ children, className }: LayoutContentProps) {
  return <div className={cn(layoutDef.content, className)}>{children}</div>;
}
