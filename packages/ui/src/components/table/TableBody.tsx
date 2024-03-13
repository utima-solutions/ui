import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableBody = memo(function TableBody({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'tbody'>) {
  return <tbody className={cn(tableDef.body, className)} {...restProps} />;
});
