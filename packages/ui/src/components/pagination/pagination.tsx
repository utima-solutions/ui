import { tv } from 'tailwind-variants';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import {
  PaginationContext,
  usePaginationContext,
  type PaginationSize,
} from './pagination-context';
import { MoreHorizontal } from 'lucide-react';
import { buttonVariants } from '../button/button';

export const paginationVariants = tv({
  slots: {
    root: 'flex flex-row items-center gap-1',
    content: 'flex flex-row items-center gap-1',
    ellipsis: 'flex items-center justify-center text-muted-foreground mx-1',
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

    return (
      <PaginationContext.Provider value={{ size }}>
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
}

export const PaginationNext = forwardRef<
  HTMLButtonElement,
  PaginationNextProps
>(function PaginationNext({ className, size, srLabel, children, ...props }, ref) {
  const { size: contextSize } = usePaginationContext();

  return (
    <button
      ref={ref}
      type='button'
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
      {children ?? 'Next'}
      <ChevronRight />
    </button>
  );
});

export interface PaginationItemProps
  extends ComponentPropsWithoutRef<'button'> {
  size?: PaginationSize;
  selected?: boolean;
}

export const PaginationItem = forwardRef<
  HTMLButtonElement,
  PaginationItemProps
>(function PaginationItem({ className, size, selected, ...props }, ref) {
  const { size: contextSize } = usePaginationContext();

  return (
    <button
      ref={ref}
      type='button'
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
}

export const PaginationPrev = forwardRef<
  HTMLButtonElement,
  PaginationPrevProps
>(function PaginationPrev({ className, size, srLabel, children, ...props }, ref) {
  const { size: contextSize } = usePaginationContext();

  return (
    <button
      ref={ref}
      type='button'
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
      <ChevronLeft />
      {children ?? 'Previous'}
    </button>
  );
});
