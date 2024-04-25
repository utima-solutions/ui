import type { VariantProps } from 'class-variance-authority';
import { memo, useMemo, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { paginationDef } from './Pagination.styles';
import { PaginationContext } from './usePaginationContext';
import type { buttonStyles } from '../button/Button.styles';

export interface PaginationRootProps extends ComponentPropsWithoutRef<'nav'> {
  size?: VariantProps<typeof buttonStyles>['size'];
}

export const PaginationRoot = memo(function PaginationRoot({
  className,
  size,
  ...props
}: PaginationRootProps) {
  const contextValue = useMemo(() => ({ size }), [size]);

  return (
    <PaginationContext.Provider value={contextValue}>
      <nav
        role='navigation'
        aria-label='pagination'
        className={cn(paginationDef.root, className)}
        {...props}
      />
    </PaginationContext.Provider>
  );
});
