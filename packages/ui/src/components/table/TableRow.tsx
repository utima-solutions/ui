import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableRowProps = ComponentProps<'tr'>;

export function TableRow({ className, ...restProps }: TableRowProps) {
  return <tr className={cn(tableDef.row, className)} {...restProps} />;
}
