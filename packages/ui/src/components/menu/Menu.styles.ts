import { twOverrides } from '@/overrides';

export const menuDef = twOverrides(
  {
    root: 'bg-menu',
    label: 'm-1 py-1 px-3 text-xs text-menu-fg/50 font-medium',
    content: 'flex flex-col list-none',
    item: '',
    subItem: '',
    link: {
      wrapper: 'm-1',
      indent: 'pl-12',
      content:
        'flex items-center py-2 px-3 transition-colors cursor-pointer hover:bg-menu-accent hover:text-menu-accent-fg w-auto rounded-radius gap-4 text-menu-fg',
      active: 'bg-menu-accent text-menu-accent-fg',
    },
    separator: 'pt-1 mb-1 border-b border-menu-border',
    subContent: {
      wrapper: 'bg-menu-submenu',
      content:
        'flex flex-col list-none transition-opacity ease-in-out duration-500',
    },
    subTrigger: {
      wrapper: 'flex justify-between',
      content: 'w-full',
      button:
        'm-1 px-3 transition-colors cursor-pointer text-menu-fg hover:bg-menu-accent hover:text-menu-accent-fg rounded-radius mr-1',
      icon: 'transition-transform size-5',
    },
  },
  'menu',
);
