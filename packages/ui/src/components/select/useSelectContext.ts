import type { VariantProps } from 'class-variance-authority';
import { createContext, useContext } from 'react';

import type { selectStyles } from './select.styles';

export const SelectContext = createContext<VariantProps<typeof selectStyles>>(
  undefined!,
);

/**
 * Used to pass down the styles and variants to the children of the Select component.
 */
export function useSelectContext() {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error('No SelectContext found when calling useSelectContext.');
  }

  return context;
}
