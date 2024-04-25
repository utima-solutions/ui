import { memo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { paginationDef } from './Pagination.styles';

export const PaginationContent = memo(function PaginationContent({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'nav'>) {
  return <ul className={cn(paginationDef.content, className)} {...restProps} />;
});
