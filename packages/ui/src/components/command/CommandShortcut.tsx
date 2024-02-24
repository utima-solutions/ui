import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { commandDef } from './Command.styles';

type CommandShortcutProps = ComponentProps<'span'>;

export function CommandShortcut({
  className,
  ...restProps
}: CommandShortcutProps) {
  return <span className={cn(commandDef.shortcut, className)} {...restProps} />;
}
