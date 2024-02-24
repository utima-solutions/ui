import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableProps = ComponentProps<'table'>;

export function Table({ className, ...restProps }: TableProps) {
  return <table className={cn(tableDef.table, className)} {...restProps} />;
}
