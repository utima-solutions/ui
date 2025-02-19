import { Slot } from '@radix-ui/react-slot';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { forwardRef, useMemo, type ComponentPropsWithoutRef } from 'react';
import { tv } from 'tailwind-variants';

import { cn } from '@/utils';

import {
  PaginationContext,
  usePaginationContext,
  type PaginationSize,
} from './pagination-context';
import { buttonVariants } from '../button/button';

export const paginationVariants = tv({
  slots: {
    root: 'flex flex-row items-center gap-1',
    content: 'flex flex-row items-center gap-1',
    ellipsis: 'text-muted-foreground mx-1 flex items-center justify-center',
  },
  variants: {
    size: {
      xs: {
        ellipsis: '[&_svg]:size-3.5',
      },
      sm: {
        ellipsis: '[&_svg]:size-4',
      },
      md: {
        ellipsis: '[&_svg]:size-4',
      },
      lg: {
        ellipsis: '[&_svg]:size-4.5',
      },
      xl: {
        ellipsis: '[&_svg]:size-5',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface PaginationProps extends ComponentPropsWithoutRef<'nav'> {
  size?: PaginationSize;
}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination({ size = 'md', className, ...props }, ref) {
    const { root } = paginationVariants({ size });
    const contextValue = useMemo(() => ({ size }), [size]);

    return (
      <PaginationContext.Provider value={contextValue}>
        <nav
          ref={ref}
          role='navigation'
          aria-label='pagination'
          data-uui-pagination
          className={cn(root(), className)}
          {...props}
        />
      </PaginationContext.Provider>
    );
  },
);

export interface PaginationContentProps
  extends ComponentPropsWithoutRef<'div'> {
  size?: PaginationSize;
}

export const PaginationContent = forwardRef<
  HTMLDivElement,
  PaginationContentProps
>(function PaginationContent({ className, size: sizeProp, ...props }, ref) {
  const { size: contextSize } = usePaginationContext();
  const { content } = paginationVariants({ size: sizeProp ?? contextSize });

  return (
    <div
      ref={ref}
      data-uui-pagination-content
      className={cn(content(), className)}
      {...props}
    />
  );
});

export interface PaginationNextProps
  extends ComponentPropsWithoutRef<'button'> {
  size?: PaginationSize;
  srLabel?: string;
  asChild?: boolean;
}

export const PaginationNext = forwardRef<
  HTMLButtonElement,
  PaginationNextProps
>(function PaginationNext(
  { className, size, srLabel, asChild, children, type, ...props },
  ref,
) {
  const { size: contextSize } = usePaginationContext();
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      {...(!asChild && { type: 'button' })}
      data-uui-pagination-next
      className={cn(
        buttonVariants({
          size: size ?? contextSize,
          variant: 'ghost',
        }),
        className,
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {children ?? 'Next'}
          <ChevronRight />
        </>
      )}
    </Comp>
  );
});

export interface PaginationItemProps
  extends ComponentPropsWithoutRef<'button'> {
  size?: PaginationSize;
  selected?: boolean;
  asChild?: boolean;
}

export const PaginationItem = forwardRef<
  HTMLButtonElement,
  PaginationItemProps
>(function PaginationItem(
  { className, size, selected, asChild, type, ...props },
  ref,
) {
  const { size: contextSize } = usePaginationContext();
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      {...(!asChild && { type: 'button' })}
      data-uui-pagination-item
      data-selected={selected}
      className={cn(
        buttonVariants({
          size: size ?? contextSize,
          variant: selected ? 'outline' : 'ghost',
        }),
        className,
      )}
      {...props}
    />
  );
});

export interface PaginationEllipsisProps
  extends ComponentPropsWithoutRef<'div'> {
  size?: PaginationSize;
}

export const PaginationEllipsis = forwardRef<
  HTMLDivElement,
  PaginationEllipsisProps
>(function PaginationEllipsis({ className, size: sizeProp, ...props }, ref) {
  const { size: contextSize } = usePaginationContext();
  const { ellipsis } = paginationVariants({ size: sizeProp ?? contextSize });

  return (
    <div
      ref={ref}
      data-uui-pagination-ellipsis
      className={cn(ellipsis(), className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
    </div>
  );
});

export interface PaginationPrevProps
  extends ComponentPropsWithoutRef<'button'> {
  size?: PaginationSize;
  srLabel?: string;
  asChild?: boolean;
}

export const PaginationPrev = forwardRef<
  HTMLButtonElement,
  PaginationPrevProps
>(function PaginationPrev(
  { className, size, srLabel, asChild, children, type, ...props },
  ref,
) {
  const { size: contextSize } = usePaginationContext();
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      {...(!asChild && { type: 'button' })}
      data-uui-pagination-prev
      className={cn(
        buttonVariants({
          size: size ?? contextSize,
          variant: 'ghost',
        }),
        className,
      )}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          <ChevronLeft />
          {children ?? 'Previous'}
        </>
      )}
    </Comp>
  );
});
