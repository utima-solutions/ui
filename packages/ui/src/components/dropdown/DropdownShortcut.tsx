import type { ComponentProps } from 'react';

import { cn } from '@/utils';

type DropdownShortcutProps = ComponentProps<'span'>;

export function DropdownShortcut({
  className,
  ...props
}: DropdownShortcutProps) {
  return (
    <span
      className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
      {...props}
    />
  );
}
