import path from 'node:path';

import utimaUi from '@utima/ui/plugin';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  content: [
    './app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}',
    // This makes sure tailwind can scan the utima ui component classes
    `${path.dirname(require.resolve('@utima/ui'))}/**/*.js`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  /**
   * Init the utima ui plugin and tailwindcss-animate, with optional
   * customizations.
   */
  plugins: [tailwindcssAnimate, utimaUi()],
} satisfies Config;
