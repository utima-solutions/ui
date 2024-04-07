import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';

import { paginationDef } from './Pagination.styles';
import { usePaginationContext } from './usePaginationContext';
import { buttonStyles } from '../button/Button.styles';

export interface PaginationLinkProps
  extends ComponentPropsWithoutRef<'a'>,
    Pick<VariantProps<typeof buttonStyles>, 'size'> {
  asChild?: boolean;
  active?: boolean;
}

export const PaginationLink = forwardRef<
  HTMLAnchorElement,
  PaginationLinkProps
>(function PaginationLink(
  {
    className,
    children,
    size = 'md',
    active = false,
    asChild = false,
    ...restProps
  },
  ref,
) {
  const { size: contextSize } = usePaginationContext();
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      className={cn(
        buttonStyles({
          size: contextSize ?? size,
          variant: 'ghost',
          outline: active ? 'ghost' : null,
        }),
        paginationDef.link,
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </Comp>
  );
});
