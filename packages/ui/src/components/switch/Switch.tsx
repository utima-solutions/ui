import { Thumb, Root } from '@radix-ui/react-switch';
import type { VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { switchDef, switchStyles } from './Switch.styles';

type SwitchProps = ComponentPropsWithoutRef<typeof Root> &
  Omit<VariantProps<typeof switchStyles>, 'thumbSize'>;

export const Switch = forwardRef<ElementRef<typeof Root>, SwitchProps>(
  ({ className, variant = 'primary', size = 'md', ...restProps }, ref) => (
    <Root
      className={cn(switchStyles({ variant, size }), className)}
      {...restProps}
      ref={ref}
    >
      <Thumb
        className={cn(size && switchDef.thumbSize[size], switchDef.thumb)}
      />
    </Root>
  ),
);
