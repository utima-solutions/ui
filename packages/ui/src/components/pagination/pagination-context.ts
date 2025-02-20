import { createContext, useContext } from 'react';

export type PaginationSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface PaginationContextValue {
  size: PaginationSize;
}

export const PaginationContext = createContext<PaginationContextValue>({
  size: 'md',
});

export function usePaginationContext() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error(
      'No PaginationContext.Provider found when calling usePaginationContext.',
    );
  }

  return context;
}
