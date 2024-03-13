import { memo, type ComponentPropsWithoutRef } from 'react';

import { Command } from './Command';
import { commandDef } from './Command.styles';
import * as Dialog from '../dialog';

export const CommandDialog = memo(function CommandDialog({
  children,
  ...restProps
}: ComponentPropsWithoutRef<typeof Dialog.Root>) {
  return (
    <Dialog.Root {...restProps}>
      <Dialog.Content className={commandDef.dialog.content}>
        <Command className={commandDef.dialog.command}>{children}</Command>
      </Dialog.Content>
    </Dialog.Root>
  );
});
