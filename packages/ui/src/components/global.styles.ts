import { twOverrides } from '@/overrides';

/**
 * Style definition for global utility styles and snippets
 */
export const globalDef = twOverrides(
  {
    ring: 'outline-none ring-ring focus:ring-2 focus:ring-offset-2',
    ringVisible:
      'outline-none ring-ring focus-visible:ring-2 focus-visible:ring-offset-2',
  },
  'global',
);
