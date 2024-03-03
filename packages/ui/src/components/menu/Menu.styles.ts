import { twOverrides } from '@/overrides';

export const menuDef = twOverrides(
  {
    rootCol: 'flex flex-col items-start shrink-0 bg-black p-6 gap-4 cursor-pointer h-full',
    rootRow: 'flex flex-row items-center bg-black p-6 gap-4 cursor-pointer w-full',
    item: {
        root: 'flex items-center gap-6 rounded-lg w-full hover:bg-gray-600 p-3',
        wrapper: 'flex flex-row gap-2 items-center',
        icon: 'w-6 h-6',
        text: 'text-white font-bold text-base font-condensed',
    }
  },
  'menu',
);
