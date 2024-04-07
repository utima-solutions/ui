import { createContext } from 'react';

export interface MenuSubContextType {
  opened: boolean;
  setOpened: (value: boolean) => void;
}

export const MenuSubContext = createContext<MenuSubContextType>(undefined!);
