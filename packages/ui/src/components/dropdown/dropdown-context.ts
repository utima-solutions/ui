import { createContext, useContext } from 'react';

export type DropdownSize = 'sm' | 'md' | 'lg';

export interface DropdownContextValue {
  size: DropdownSize;
}

export const DropdownContext = createContext<DropdownContextValue>({
  size: 'md',
});

export const useDropdown = () => useContext(DropdownContext);
