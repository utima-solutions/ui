import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableHRowProps = ComponentProps<'tr'>;

export function TableHRow({ className, ...restProps }: TableHRowProps) {
  return <tr className={cn(tableDef.hRow, className)} {...restProps} />;
}
