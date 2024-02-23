import { Root } from '@radix-ui/react-separator';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { separatorDef } from './Separator.styles';

type SeparatorProps = ComponentPropsWithoutRef<typeof Root> & {
  size?: keyof typeof separatorDef.variants.sizeHorizontal;
};

export const Separator = forwardRef<ElementRef<typeof Root>, SeparatorProps>(
  (
    {
      className,
      style = 'solid',
      orientation = 'horizontal',
      decorative = true,
      size = 'sm',
      ...props
    },
    ref,
  ) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorDef.separator,
        orientation === 'horizontal'
          ? `${separatorDef.variants.sizeHorizontal[size]} w-full`
          : `${separatorDef.variants.sizeVertical[size]} h-full`,
        className,
      )}
      {...props}
    />
  ),
);
