import { Root } from '@radix-ui/react-select';
import type { VariantProps } from 'class-variance-authority';
import { useMemo, type ComponentPropsWithoutRef } from 'react';

import type { selectStyles } from './select.styles';
import { SelectContext } from './useSelectContext';

type SelectRootProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof selectStyles>;

export function SelectRoot({
  size = 'md',
  variant = 'default',
  ...restProps
}: SelectRootProps) {
  const contextValue = useMemo(() => {
    return { size, variant };
  }, [size, variant]);

  return (
    <SelectContext.Provider value={contextValue}>
      <Root {...restProps} />
    </SelectContext.Provider>
  );
}
