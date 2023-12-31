import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [react(), styleX()],
});
