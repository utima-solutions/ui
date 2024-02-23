import { twOverrides } from '@/overrides';

export const separatorDef = twOverrides(
  {
    separator: 'shrink-0 bg-separator',
    variants: {
      sizeHorizontal: {
        xs: 'h-[0.5px]',
        sm: 'h-[1px]',
        md: 'h-[2px]',
        lg: 'h-[3px]',
        xl: 'h-[4px]',
        '2xl': 'h-[5px]',
        '3xl': 'h-[6px]',
        '4xl': 'h-[7px]',
        '5xl': 'h-[8px]',
        '6xl': 'h-[9px]',
        '7xl': 'h-[10px]',
        '8xl': 'h-[11px]',
        '9xl': 'h-[12px]',
      },
      sizeVertical: {
        xs: 'w-[0.5px]',
        sm: 'w-[1px]',
        md: 'w-[2px]',
        lg: 'w-[3px]',
        xl: 'w-[4px]',
        '2xl': 'w-[5px]',
        '3xl': 'w-[6px]',
        '4xl': 'w-[7px]',
        '5xl': 'w-[8px]',
        '6xl': 'w-[9px]',
        '7xl': 'w-[10px]',
        '8xl': 'w-[11px]',
        '9xl': 'w-[12px]',
      },
    },
  },
  'separator',
);
