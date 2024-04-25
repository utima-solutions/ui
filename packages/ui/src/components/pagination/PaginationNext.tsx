import { ChevronRight } from 'lucide-react';
import { memo } from 'react';

import { paginationDef } from './Pagination.styles';
import { PaginationLink, type PaginationLinkProps } from './PaginationLink';

export const PaginationNext = memo(function PaginationNext({
  children,
  ...restProps
}: PaginationLinkProps) {
  return (
    <PaginationLink {...restProps}>
      {children}
      <ChevronRight className={paginationDef.icon} />
    </PaginationLink>
  );
});
