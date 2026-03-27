import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.stories.tsx', 'src/main.tsx', 'src/App.tsx'],
      outDir: 'dist/types',
    }),
  ],
  build: {
    lib: {
      entry: {
        'ergo-ui': 'src/index.ts',
        'ergo-ui-sharp': 'src/sharp/index.ts',
      },
      name: 'ErgoUI',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
  },
})
