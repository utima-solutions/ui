import { Root, Indicator } from '@radix-ui/react-checkbox';
import type { VariantProps } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';
import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react';

import { cn } from '@/utils';

import { checkboxDef, checkboxStyles } from './Checkbox.styles';

type CheckboxProps = ComponentPropsWithoutRef<typeof Root> &
  Omit<VariantProps<typeof checkboxStyles>, 'thumbSize'>;

export const Checkbox = forwardRef<ElementRef<typeof Root>, CheckboxProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => (
    <Root
      ref={ref}
      className={cn(checkboxStyles({ variant, size }), className)}
      {...props}
    >
      <Indicator className={cn(checkboxDef.indicator)}>
        <CheckIcon
          className={cn(checkboxDef.icon, size && checkboxDef.iconSize[size])}
          strokeWidth={3}
        />
      </Indicator>
    </Root>
  ),
);
