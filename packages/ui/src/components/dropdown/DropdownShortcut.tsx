import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { dropdownDef } from './Dropdown.styles';

export const DropdownShortcut = memo(function DropdownShortcut({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'span'>) {
  return (
    <span className={cn(dropdownDef.shortcut, className)} {...restProps} />
  );
});
