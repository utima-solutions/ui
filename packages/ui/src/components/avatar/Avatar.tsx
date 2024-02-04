import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { avatarStyles } from './Avatar.styles';
import { AvatarFallback } from './AvatarFallback';
import { AvatarImage } from './AvatarImage';

type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> &
  Pick<
    ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>,
    'onLoadingStatusChange'
  > &
  VariantProps<typeof avatarStyles> & {
    delayMs?: number;
    fallback?: string;
    src?: string;
    alt?: string;
  };

export const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(function Avatar(
  {
    className,
    fallback,
    delayMs,
    size,
    src,
    alt,
    onLoadingStatusChange,
    ...props
  },
  ref,
) {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarStyles({ size }), className)}
      {...props}
    >
      <AvatarImage
        onLoadingStatusChange={onLoadingStatusChange}
        src={src}
        alt={alt}
      />
      <AvatarFallback delayMs={delayMs}>{fallback}</AvatarFallback>
    </AvatarPrimitive.Root>
  );
});