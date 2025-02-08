import { Trigger } from '@radix-ui/react-select';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { SelectElement } from './SelectElement';
import { useSelectContext } from './useSelectContext';

export const SelectTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  ComponentPropsWithoutRef<typeof Trigger>
>(({ className, ...restProps }, ref) => {
  const { size, variant } = useSelectContext();

  return (
    <Trigger asChild>
      <SelectElement ref={ref} size={size} variant={variant} {...restProps} />
    </Trigger>
  );
});
