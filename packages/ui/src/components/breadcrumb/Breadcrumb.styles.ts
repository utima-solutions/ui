import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

export const breadcrumbDef = twOverrides(
  {
    breadcrumb: '',
    ellipsis: {
      wrapper: `${globalDef.ringVisible} flex h-9 w-9 items-center justify-center`,
      icon: 'size-4',
    },
    item: 'inline-flex items-center gap-1.5',
    link: `${globalDef.ringVisible} rounded-radius transition-colors hover:text-foreground`,
    list: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-fg sm:gap-2.5',
    page: 'font-normal text-foreground',
    separator: '[&>svg]:size-3.5',
  },
  'breadcrumb',
);
