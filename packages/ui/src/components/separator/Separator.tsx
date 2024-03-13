import { Root } from '@radix-ui/react-separator';
import { type ComponentPropsWithoutRef, memo } from 'react';

import { cn } from '@/utils';

import { separatorDef } from './Separator.styles';

export interface SeparatorProps extends ComponentPropsWithoutRef<typeof Root> {
  size?: keyof typeof separatorDef.variants.sizeHorizontal;
}

export const Separator = memo(function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  size = 'sm',
  ...restProps
}: SeparatorProps) {
  return (
    <Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorDef.separator,
        orientation === 'horizontal'
          ? `${separatorDef.variants.sizeHorizontal[size]} w-full`
          : `${separatorDef.variants.sizeVertical[size]} h-full`,
        className,
      )}
      {...restProps}
    />
  );
});
