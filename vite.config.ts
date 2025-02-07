/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      all: true,
      exclude: [
        'src/test/**/*',
        '**/types.ts',
        '**/types/*',
        '**/interfaces.ts',
        '**/*.d.ts',
        '**/index.ts',
        'src/config/**/*',
        'src/**/*/enums.ts',
        'src/setupTest.ts',
        // 'src/**/*/*.test.tsx',
        '**/*.test.tsx',
        '**/*.test.ts',
      ],
      extension: ['.ts', '.tsx'],
      include: ['src/**/*'],
      provider: 'v8',
      reporter: ['text'],
    },
    css: false,
    environment: 'jsdom',
    globals: true,
    maxConcurrency: 8,
    setupFiles: ['src/setupTest.ts'],
  },
});
