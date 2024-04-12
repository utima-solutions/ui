import path from 'node:path';

import utimaUi from '@utima/ui/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    `${path.dirname(require.resolve('@utima/ui'))}/**/*.js`,
    `${path.dirname(require.resolve('@utima/ui-informed'))}/**/*.js`,
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate'), utimaUi()],
};
