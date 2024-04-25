import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { paginationDef } from './Pagination.styles';

export const PaginationItem = memo(function PaginationItem({
  className,
  ...props
}: ComponentPropsWithoutRef<'li'>) {
  return <li className={cn(paginationDef.item, className)} {...props} />;
});
