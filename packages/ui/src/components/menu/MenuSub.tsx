import { useCallback, useMemo, useState, type ReactNode } from 'react';

import { MenuSubContext, type MenuSubContextType } from './menuSubContext';

export interface MenuSub {
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function MenuSub({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}: MenuSub) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleSetOpened = useCallback(
    (currentOpen: boolean) => {
      setIsOpen(currentOpen);
      onOpenChange?.(currentOpen);
    },
    [onOpenChange],
  );

  const contextValue = useMemo<MenuSubContextType>(
    () => ({
      opened: open ?? isOpen,
      setOpened: handleSetOpened,
    }),
    [open, isOpen, handleSetOpened],
  );

  return (
    <MenuSubContext.Provider value={contextValue}>
      {children}
    </MenuSubContext.Provider>
  );
}
