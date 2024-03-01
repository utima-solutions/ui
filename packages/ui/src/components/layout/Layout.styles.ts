import { twOverrides } from '@/overrides';

export const layoutDef = twOverrides(
  {
    header: 'h-16',
    root: 'flex flex-col h-screen',
    wrapper: 'flex flex-1 overflow-hidden',
    sideBar: 'h-full w-64 overflow-y-auto',
    content: 'flex-1 overflow-y-auto',
  },
  'layout',
);
