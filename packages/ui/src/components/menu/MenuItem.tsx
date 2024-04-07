import type { ReactNode } from 'react';

export interface MenuItem {
  children: ReactNode;
}

export function MenuItem({ children }: MenuItem) {
  return <li className=''>{children}</li>;
}
