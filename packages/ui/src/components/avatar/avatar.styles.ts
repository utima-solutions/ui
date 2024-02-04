import { cva } from 'class-variance-authority';

import { twOverrides } from '@/utils';

/**
 * Style definition for avatar components
 */
export const avatarDef = twOverrides(
  {
    avatar:
      'relative bg-muted flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
    image: 'aspect-square h-full w-full duration-300 animate-in fade-in',
    fallback:
      'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-fg',
    variants: {
      size: {
        xs: 'h-7 w-7 text-xs',
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-14 w-14 text-xl',
        '2xl': 'h-16 w-16 text-2xl',
        '3xl': 'h-20 w-20 text-3xl',
        '4xl': 'h-24 w-24 text-4xl',
        '5xl': 'h-28 w-28 text-5xl',
        '6xl': 'h-32 w-32 text-6xl',
        '7xl': 'h-36 w-36 text-6xl',
        '8xl': 'h-40 w-40 text-6xl',
        '9xl': 'h-44 w-44 text-7xl',
      },
    },
  },
  'avatar',
);

export const avatarStyles = cva(avatarDef.avatar, {
  variants: avatarDef.variants,
});
