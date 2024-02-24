import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableColProps = ComponentProps<'td'>;

export function TableCol({ className, ...restProps }: TableColProps) {
  return <td className={cn(tableDef.col, className)} {...restProps} />;
}
