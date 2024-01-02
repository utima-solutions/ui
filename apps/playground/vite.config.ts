import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-expect-error missing types
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [react(), styleX()],
});
