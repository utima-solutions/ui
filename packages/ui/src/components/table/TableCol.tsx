import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableColProps = ComponentProps<'td'>;

export function TableCol({ className, ...props }: TableColProps) {
  return <td className={cn(tableDef.col, className)} {...props} />;
}
