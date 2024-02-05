import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableHeadProps = ComponentProps<'thead'>;

export function TableHead({ className, ...props }: TableHeadProps) {
  return <thead className={cn(tableDef.head, className)} {...props} />;
}
