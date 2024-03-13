import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableHRow = memo(function TableHRow({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'tr'>) {
  return <tr className={cn(tableDef.hRow, className)} {...restProps} />;
});
