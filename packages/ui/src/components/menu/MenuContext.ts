import { createContext, type Dispatch } from 'react';

export interface MenuSubContextType {
  opened: boolean;
  setOpened: Dispatch<React.SetStateAction<boolean>>;
}

export const MenuSubContext = createContext<MenuSubContextType>(undefined!);
