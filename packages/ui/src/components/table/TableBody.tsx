import type { ComponentProps } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

type TableBodyProps = ComponentProps<'tbody'>;

export function TableBody({ className, ...restProps }: TableBodyProps) {
  return <tbody className={cn(tableDef.body, className)} {...restProps} />;
}
