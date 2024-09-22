import { twOverrides } from '@/overrides';

export const paginationDef = twOverrides(
  {
    root: '',
    content: 'flex flex-row items-center gap-1',
    icon: 'size-4',
    ellipsis: {
      content: 'flex h-9 w-9 items-center text-primary justify-center',
    },
    item: '',
    link: 'cursor-pointer aria-disabled:opacity-65 aria-disabled:cursor-not-allowed font-normal',
  },
  'pagination',
);
