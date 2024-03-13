import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { dialogDef } from './Dialog.styles';

export const DialogHeader = memo(function DialogHeader({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn(dialogDef.header, className)} {...restProps} />;
});
