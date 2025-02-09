import { createContext, useContext } from 'react';
import type { VariantProps } from 'tailwind-variants';

import type { SetNonNullable } from 'type-fest';
import type { selectVariants } from './select.style';

export const SelectContext = createContext<
  SetNonNullable<VariantProps<typeof selectVariants>, 'size'>
>(undefined!);

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
