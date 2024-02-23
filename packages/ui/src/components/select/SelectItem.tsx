import { ItemText, ItemIndicator, Item } from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef, selectStyles } from './select.styles';
import { useSelectContext } from './useSelectContext';

export const SelectItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => {
  const { size } = useSelectContext();

  return (
    <Item
      ref={ref}
      className={cn(
        selectDef.item.base,
        selectStyles({ size, variant: null }),
        className,
      )}
      {...props}
    >
      <span className={selectDef.item.text}>
        <ItemText>{children}</ItemText>
      </span>
      <ItemIndicator className={selectDef.item.icon}>
        <CheckIcon size={16} />
      </ItemIndicator>
    </Item>
  );
});
