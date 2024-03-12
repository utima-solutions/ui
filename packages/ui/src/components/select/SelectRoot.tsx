import { Root } from '@radix-ui/react-select';
import type { VariantProps } from 'class-variance-authority';
import { useMemo, type ComponentPropsWithoutRef, memo } from 'react';

import type { selectStyles } from './select.styles';
import { SelectContext } from './useSelectContext';

interface SelectRootProps
  extends ComponentPropsWithoutRef<typeof Root>,
    VariantProps<typeof selectStyles> {}

export const SelectRoot = memo(function SelectRoot({
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
});
