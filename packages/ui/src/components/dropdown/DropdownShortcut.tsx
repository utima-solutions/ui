import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

type DropdownShortcutProps = ComponentProps<'span'>;

export function DropdownShortcut({
  className,
  ...restProps
}: DropdownShortcutProps) {
  return <span className={cn(dropdownDef.shortcut, className)} {...restProps} />;
}
