import { Icon, type Trigger } from '@radix-ui/react-select';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { selectDef, selectStyles } from './select.styles';

type SelectElementProps = VariantProps<typeof selectStyles> &
  ComponentPropsWithoutRef<typeof Trigger>;

export const SelectElement = forwardRef<
  ElementRef<typeof Trigger>,
  SelectElementProps
>(
  (
    {
      className,
      children,
      asChild,
      size = 'md',
      variant = 'default',
      ...restProps
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={cn(
          selectDef.trigger,
          selectStyles({ size, variant }),
          className,
        )}
        {...restProps}
      >
        {children}
        <Icon asChild>
          <ChevronDown size={16} />
        </Icon>
      </Comp>
    );
  },
);
