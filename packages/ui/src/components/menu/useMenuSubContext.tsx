import { useContext } from 'react';

import { MenuSubContext } from './menuSubContext';

/**
 * Returns state of the closest MenuSub ancestor.
 */
export function useMenuSubContext() {
  const context = useContext(MenuSubContext);

  if (!context) {
    throw new Error(
      'No MenuSubContext.Provider found when calling useMenuSubContext.',
    );
  }

  return context;
}
