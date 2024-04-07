import { MoreHorizontal } from 'lucide-react';
import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { paginationDef } from './Pagination.styles';

export const PaginationEllipsis = memo(function PaginationEllipsis({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      aria-hidden
      className={cn(paginationDef.ellipsis.content, className)}
      {...restProps}
    >
      <MoreHorizontal className={paginationDef.icon} />
    </span>
  );
});
