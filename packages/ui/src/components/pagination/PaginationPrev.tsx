import { ChevronLeft } from 'lucide-react';
import { memo } from 'react';

import { paginationDef } from './Pagination.styles';
import { PaginationLink, type PaginationLinkProps } from './PaginationLink';

export const PaginationPrev = memo(function PaginationPrev({
  children,
  ...restProps
}: PaginationLinkProps) {
  return (
    <PaginationLink {...restProps}>
      <ChevronLeft className={paginationDef.icon} />
      {children}
    </PaginationLink>
  );
});
