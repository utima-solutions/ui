import type { VariantProps } from 'class-variance-authority';
import { createContext, useContext } from 'react';

import type { buttonStyles } from '../button/Button.styles';

export interface PaginationContextType {
  size: VariantProps<typeof buttonStyles>['size'];
}

export const PaginationContext = createContext<PaginationContextType>(
  undefined!,
);

export function usePaginationContext() {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error(
      'No PaginationContext.Provider found when calling usePaginationContext.',
    );
  }

  return context;
}
