import { useContext } from 'react';
import AnimateHeight from 'react-animate-height';

import { cn } from '@/utils';

import { MenuSubContext, type MenuSubContextType } from './MenuContext';

export interface MenuSubContent {}

export function MenuSubContent({ children }: { children: React.ReactNode }) {
  const { opened } = useContext<MenuSubContextType>(MenuSubContext);

  return (
    <AnimateHeight
      easing='ease-in-out'
      duration={300}
      disableDisplayNone
      height={opened ? 'auto' : 0}
    >
      <div className='bg-slate-800'>
        <ul
          className={cn(
            'transition-all ease-in-out duration-300',
            opened ? 'opacity-100' : 'opacity-0',
          )}
        >
          {children}
        </ul>
      </div>
    </AnimateHeight>
  );
}
