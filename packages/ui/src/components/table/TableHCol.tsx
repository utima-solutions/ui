import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableHColProps = ComponentProps<'th'>;

export function TableHCol({ className, children, ...props }: TableHColProps) {
  return (
    <th className={cn(tableDef.hCol, className)} {...props}>
      {children}
    </th>
  );
}
