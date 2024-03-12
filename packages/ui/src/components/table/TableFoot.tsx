import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { tableDef } from './Table.styles';

export const TableFoot = memo(function TableFoot({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'thead'>) {
  return <tfoot className={cn(tableDef.foot, className)} {...restProps} />;
});
