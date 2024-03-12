import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

export const DialogFooter = memo(function DialogFooter({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn(dialogDef.footer, className)} {...restProps} />;
});
