import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableProps = ComponentProps<'table'>;

export function Table({ className, ...props }: TableProps) {
  return <table className={cn(tableDef.table, className)} {...props} />;
}
