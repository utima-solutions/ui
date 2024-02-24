import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';

import { cn } from '@/utils';

import { avatarDef } from './Avatar.styles';

export const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...restProps }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(avatarDef.fallback, className)}
    {...restProps}
  />
));
