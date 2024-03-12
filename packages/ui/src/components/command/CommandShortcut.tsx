import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

export const CommandShortcut = memo(function CommandShortcut({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'span'>) {
  return <span className={cn(commandDef.shortcut, className)} {...restProps} />;
});
