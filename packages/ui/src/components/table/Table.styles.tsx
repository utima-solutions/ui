import { twOverrides } from '@/overrides';

export const tableDef = twOverrides(
  {
    table:
      'w-full text-sm text-left text-foreground rounded-tl-md rounded-tr-md overflow-hidden',
    body: '',
    foot: 'text-xs uppercase text-table-fg bg-table',
    head: 'text-table-fg bg-table',
    col: 'p-2 py-3 h-[70px]',
    row: 'bg-white hover:bg-border/10 border-b border-table-border',
    hRow: 'text-table-fg bg-table',
    hCol: 'p-2',
  },
  'table',
);
