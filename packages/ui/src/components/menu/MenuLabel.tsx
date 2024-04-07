import type { ReactNode } from 'react';

export interface MenuLabel {
  children: ReactNode;
}

export function MenuLabel({ children }: MenuLabel) {
  return (
    <li
      role='presentation'
      className='py-1 px-3 text-xs text-menu-fg/50 font-medium'
    >
      {children}
    </li>
  );
}
