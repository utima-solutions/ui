import { Label } from '@radix-ui/react-select';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef, selectStyles } from './select.styles';
import { useSelectContext } from './useSelectContext';

export const SelectLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  const { size } = useSelectContext();

  return (
    <Label
      ref={ref}
      className={cn(
        selectStyles({ size, variant: null }),
        selectDef.label,
        className,
      )}
      {...props}
    />
  );
});
