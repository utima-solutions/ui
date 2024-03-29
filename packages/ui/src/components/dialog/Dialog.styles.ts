import { twOverrides } from '@/overrides';

import { globalDef } from '../global.styles';

/**
 * Style definition for dialog
 */
export const dialogDef = twOverrides(
  {
    description: 'text-sm text-muted-fg',
    footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    header: 'flex flex-col space-y-1.5 text-center sm:text-left',
    overlay:
      'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    title: 'text-lg text-popover-fg font-semibold leading-none tracking-tight',
    content: {
      wrapper:
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-popover p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-radius',
      close: `${globalDef.ring} transition-all absolute right-4 top-4 rounded-radius hover:text-muted-fg/80 focus:outline-none disabled:pointer-events-none data-[state=open]:text-muted-fg`,
      closeIcon: 'h-4 w-4',
    },
  },
  'dialog',
);
