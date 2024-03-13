import type { VariantProps } from 'class-variance-authority';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { kbdStyles } from './Kbd.styles';

export interface KbdProps
  extends ComponentPropsWithoutRef<'span'>,
    Omit<VariantProps<typeof kbdStyles>, 'outline'> {}

export const Kbd = memo(function Kbd({
  className,
  size = 'xs',
  variant = 'default',
  ...restProps
}: KbdProps) {
  return (
    <span
      className={cn(kbdStyles({ size, variant }), className)}
      {...restProps}
    />
  );
});
