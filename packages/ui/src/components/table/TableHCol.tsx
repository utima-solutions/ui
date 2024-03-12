import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableHCol = memo(function TableHCol({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'th'>) {
  return (
    <th className={cn(tableDef.hCol, className)} {...restProps}>
      {children}
    </th>
  );
});
