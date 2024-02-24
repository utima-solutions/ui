import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

type DialogFooterProps = ComponentProps<'div'>;

export function DialogFooter({ className, ...restProps }: DialogFooterProps) {
  return <div className={cn(dialogDef.footer, className)} {...restProps} />;
}
