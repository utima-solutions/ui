import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableHead = memo(function TableHead({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'thead'>) {
  return <thead className={cn(tableDef.head, className)} {...restProps} />;
});
