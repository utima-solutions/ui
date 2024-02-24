import { ItemText, ItemIndicator, Item } from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef } from './select.styles';
import { useSelectContext } from './useSelectContext';

export const SelectItem = forwardRef<
  ElementRef<typeof Item>,
  ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...restProps }, ref) => {
  const { size } = useSelectContext();

  return (
    <Item
      ref={ref}
      className={cn(
        selectDef.item.base,
        size && selectDef.item.size[size],
        className,
      )}
      {...restProps}
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
