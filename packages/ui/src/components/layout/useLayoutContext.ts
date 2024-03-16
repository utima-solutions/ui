import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';

export type LayoutContextType = {
  hasSidebar: boolean;
  hasHeader: boolean;
  headerHeight: string;
  sidebarWidth: string;
  setSidebarOpened: Dispatch<SetStateAction<boolean>>;
  isSidebarOpened: boolean;
};

/**
 * Holds layout specific settings and sidebar handlers,
 * which are propagated to child layout components.
 */
export const LayoutContext = createContext<LayoutContextType>(undefined!);

/**
 * Helper hook to access current layout state.
 */
export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('No LayoutContext found when calling useLayoutContext');
  }

  return context;
}
