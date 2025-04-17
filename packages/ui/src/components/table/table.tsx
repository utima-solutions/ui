import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { cn } from '../../utils';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {
  classNameContainer?: string;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, classNameContainer, ...props }, ref) => (
    <div
      data-uui-table-container
      className={cn(
        'rounded-md border-border relative w-full overflow-auto border',
        classNameContainer,
      )}
    >
      <table
        ref={ref}
        data-uui-table
        className={cn('w-full caption-bottom text-sm bg-background', className)}
        {...props}
      />
    </div>
  ),
);

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<'tbody'>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    data-uui-table-body
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
));

export const TableRow = forwardRef<
  HTMLTableRowElement,
  ComponentPropsWithoutRef<'tr'>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    data-uui-table-row
    className={cn(
      'border-b transition-colors hover:bg-accent data-[state=selected]:accent',
      className,
    )}
    {...props}
  />
));

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<'thead'>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    data-uui-table-head
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&_tr]:border-b',
      className,
    )}
    {...props}
  />
));

export const TableHead = forwardRef<
  HTMLTableCellElement,
  ComponentPropsWithoutRef<'th'>
>(({ className, children, ...props }, ref) => (
  <th
    ref={ref}
    data-uui-table-head
    className={cn(
      'h-12 px-3 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  >
    {children}
  </th>
));

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  ComponentPropsWithoutRef<'tfoot'>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    data-uui-table-footer
    className={cn(
      'border-t bg-muted/25 font-medium [&>tr]:last:border-b-0',
      className,
    )}
    {...props}
  />
));

export const TableCell = forwardRef<
  HTMLTableCellElement,
  ComponentPropsWithoutRef<'td'>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    data-uui-table-cell
    className={cn(
      'py-2.5 px-3 align-middle [&:has([role=checkbox])]:pr-0',
      className,
    )}
    {...props}
  />
));
