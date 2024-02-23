import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentProps } from 'react';

import { cn } from '@/utils';

import { badgeStyles } from './Badge.styles';

export type BadgeProps = ComponentProps<'div'> &
  Omit<VariantProps<typeof badgeStyles>, 'outline' | 'disabled'> & {
    outline?: boolean;
    disabled?: boolean;
  };

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      outline = false,
      disabled = false,
      ...restProps
    },
    ref,
  ) => (
    <div
      ref={ref}
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
  ),
);
