import { twOverrides } from '@/overrides';

export const layoutDef = twOverrides(
  {
    header:
      'fixed top-0 z-50 w-full h-16 bg-primary text-primary-fg flex flex-row',
    root: '',
    sideBar: {
      wrapper:
        'fixed top-0 left-0 z-40 w-64 max-w-full h-screen pt-16 transition-transform -translate-x-full sm:translate-x-0',
      content: 'h-full px-3 pb-4 overflow-y-auto bg-primary text-primary-fg',
    },
    content: {
      base: '',
      withSidebar: 'sm:ml-64',
      withHeader: 'mt-16',
      overlay: 'fixed z-30 t-0 l-0 h-full w-full bg-black/75',
    },
  },
  'layout',
);
