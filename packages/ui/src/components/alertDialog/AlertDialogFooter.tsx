import type { HTMLAttributes } from 'react';

import { cn } from '@/utils';

import { alertDialogDef } from './AlertDialog.styles';

export function AlertDialogFooter({
  className,
  ...restProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(alertDialogDef.footer, className)} {...restProps} />
  );
}
