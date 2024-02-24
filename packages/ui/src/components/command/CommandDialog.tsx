import type { ComponentPropsWithoutRef } from 'react';

import { Command } from './Command';
import { commandDef } from './Command.styles';
import * as Dialog from '../dialog';

type CommandDialogProps = ComponentPropsWithoutRef<typeof Dialog.Root>;

export function CommandDialog({ children, ...restProps }: CommandDialogProps) {
  return (
    <Dialog.Root {...restProps}>
      <Dialog.Content className={commandDef.dialog.content}>
        <Command className={commandDef.dialog.command}>{children}</Command>
      </Dialog.Content>
    </Dialog.Root>
  );
}
