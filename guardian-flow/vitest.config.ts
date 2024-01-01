import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [Vue()],
    test: {
        globals: true,
        exclude: ['**/server/**/*', '**/node_modules/**/*'],
        coverage: {
            // Escludi i file nella cartella 'server' dal coverage
            exclude: ['server/**/*'],
          },
    

    },
})