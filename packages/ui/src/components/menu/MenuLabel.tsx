import type { ReactNode } from 'react';

export interface MenuLabel {
  children: ReactNode;
}

export function MenuLabel({ children }: MenuLabel) {
  return (
    <li role='presentation' className='m-1 py-2 px-3 text-sm text-muted'>
      {children}
    </li>
  );
}
