import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';

interface LayoutRootProps {
  children: ReactNode;
  className?: string;
}

export function LayoutRoot({ children, className }: LayoutRootProps) {
  return <div className={cn(layoutDef.root, className)}>{children}</div>;
}
