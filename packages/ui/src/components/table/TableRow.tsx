import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableRow = memo(function TableRow({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'tr'>) {
  return <tr className={cn(tableDef.row, className)} {...restProps} />;
});
