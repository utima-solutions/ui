import { twOverrides } from '@/overrides';

export const tableDef = twOverrides(
  {
    table: 'w-full caption-bottom text-sm bg-background',
    body: '[&_tr:last-child]:border-0',
    foot: 'border-t bg-muted/25 font-medium [&>tr]:last:border-b-0',
    head: 'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&_tr]:border-b',
    col: 'p-4 align-middle [&:has([role=checkbox])]:pr-0',
    row: 'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
    hRow: 'text-foreground',
    hCol: 'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
  },
  'table',
);
