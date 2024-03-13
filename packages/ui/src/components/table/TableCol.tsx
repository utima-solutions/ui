import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableCol = memo(function TableCol({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'td'>) {
  return <td className={cn(tableDef.col, className)} {...restProps} />;
});
