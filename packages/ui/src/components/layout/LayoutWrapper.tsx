import type { ReactNode } from 'react';

import { cn } from '@/utils';

import { layoutDef } from './Layout.styles';

interface LayoutWrapperProps {
  children: ReactNode;
  className?: string;
}

export function LayoutWrapper({ children, className }: LayoutWrapperProps) {
  return <div className={cn(layoutDef.wrapper, className)}>{children}</div>;
}
