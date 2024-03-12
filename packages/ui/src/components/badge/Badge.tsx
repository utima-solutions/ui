import type { VariantProps } from 'class-variance-authority';
import { type ComponentPropsWithoutRef, memo } from 'react';

import { cn } from '@/utils';

import { badgeStyles } from './Badge.styles';

export interface BadgeProps
  extends ComponentPropsWithoutRef<'span'>,
    Omit<VariantProps<typeof badgeStyles>, 'outline' | 'disabled'> {
  outline?: boolean;
  disabled?: boolean;
}

export const Badge = memo(function Badge({
  className,
  variant = 'primary',
  size = 'md',
  outline = false,
  disabled = false,
  ...restProps
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeStyles({
          variant,
          size,
          outline: outline && variant ? variant : null,
          disabled: disabled ? 'DEFAULT' : null,
          className,
        }),
      )}
      {...restProps}
    />
  );
});
