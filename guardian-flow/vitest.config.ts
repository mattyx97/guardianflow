import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [Vue()],
    test: {
        globals: true,
        exclude: ['**/server/**/*', '**/node_modules/**/*'],
        coverage: {
            // Escludi i file nella cartella 'server' dal coverage
            exclude: ['server/**/*','node_modules/**/*','app.vue','error.vue','nuxt.config.js','package.json','package-lock.json','README.md','tsconfig.json','vite.config.ts','.nuxt/**/*','nuxt.config.ts','tailwind.config.js','composables/**/*','layouts/**/*','middleware/**/*','plugins/**/*','types/**/*'],
          },
    

    },
})