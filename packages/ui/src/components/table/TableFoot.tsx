import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableFootProps = ComponentProps<'thead'>;

export function TableFoot({ className, ...props }: TableFootProps) {
  return <tfoot className={cn(tableDef.foot, className)} {...props} />;
}
