import { twOverrides } from '@/overrides';

export const menuDef = twOverrides(
  {
    root: 'flex flex-col items-start shrink-0 bg-black p-6 gap-4 cursor-pointer h-full',
    item: {
        root: 'flex w-full flex-col',
        wrapper: 'flex items-center gap-6 rounded-lg w-full hover:bg-gray-600 p-3 flex-row text-white justify-between',
        content: 'flex flex-row items-center gap-3',
    }
  },
  'menu',
);
