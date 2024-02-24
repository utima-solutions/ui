import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

type DialogHeaderProps = ComponentProps<'div'>;

export function DialogHeader({ className, ...restProps }: DialogHeaderProps) {
  return <div className={cn(dialogDef.header, className)} {...restProps} />;
}
