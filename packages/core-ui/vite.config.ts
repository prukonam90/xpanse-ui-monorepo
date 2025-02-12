import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Entry point for the library
      name: '@xpanse/core-ui', // Global variable name for the library
      fileName: (format) => `xpanse-core-ui.${format}.js`, // Output file name
      formats: ['es', 'cjs'], // Output formats (ES modules and CommonJS)
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled into the library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
      },
    }
  },
});