import { ChevronDown } from 'lucide-react';
import { useContext, type ReactNode } from 'react';

import { cn } from '@/utils';

import { MenuSubContext, type MenuSubContextType } from './MenuContext';

export interface MenuSubTrigger {
  children?: ReactNode;
}

export function MenuSubTrigger({ children }: MenuSubTrigger) {
  const { opened, setOpened } = useContext<MenuSubContextType>(MenuSubContext);

  return (
    <div className='flex justify-between'>
      <span className='w-full'>{children}</span>
      <button
        onClick={() => setOpened(v => !v)}
        className='py-2 px-3 transition-colors cursor-pointer text-menu-fg hover:bg-menu-accent hover:text-menu-accent-fg rounded-radius'
      >
        <ChevronDown
          className={cn(
            'transition-transform size-5',
            opened && '-scale-y-100',
          )}
        />
      </button>
    </div>
  );
}
