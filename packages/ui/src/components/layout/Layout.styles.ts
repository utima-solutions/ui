import { twOverrides } from '@/overrides';

export const layoutDef = twOverrides(
  {
    header:
      'fixed top-0 z-50 w-full bg-primary text-primary-fg flex flex-row items-center',
    root: '',
    sidebar: {
      wrapper:
        'fixed top-0 left-0 z-40 max-w-full h-screen transition-transform -translate-x-full sidebar:translate-x-0',
      content: 'h-full px-3 pb-4 overflow-y-auto bg-primary text-primary-fg',
    },
    content: {
      base: 'sidebar-hidden:!ml-0',
      overlay:
        'fixed z-30 t-0 l-0 h-full w-full bg-black/75 transition-opacity cursor-pointer pointer-events-none block opacity-0',
    },
  },
  'layout',
);
