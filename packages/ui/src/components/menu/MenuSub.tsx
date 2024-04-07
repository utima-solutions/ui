import { useMemo, useState, type ReactNode } from 'react';

import { MenuSubContext, type MenuSubContextType } from './menuSubContext';

export interface MenuSub {
  children?: ReactNode;
  open?: boolean;
}

export function MenuSub({ children, open }: MenuSub) {
  const [isOpen, setIsOpen] = useState(false);
  const contextValue = useMemo<MenuSubContextType>(
    () => ({
      opened: open ?? isOpen,
      setOpened: setIsOpen,
    }),
    [open, isOpen, setIsOpen],
  );

  return (
    <MenuSubContext.Provider value={contextValue}>
      {children}
    </MenuSubContext.Provider>
  );
}
