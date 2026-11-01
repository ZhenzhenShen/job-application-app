import { defineConfig } from 'cypress'
import viteConfig from './vite.config.js'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/cypress/e2e/**/*.cy.js',
    supportFile: false,
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig: {
        ...viteConfig,
        server: { ...viteConfig.server, host: '::' },
      },
    },
    specPattern: 'tests/cypress/component/**/*.cy.js',
    supportFile: false,
    indexHtmlFile: 'tests/cypress/component-index.html',
  },
  screenshotsFolder: 'tests/artifacts/screenshots',
  videosFolder: 'tests/artifacts/videos',
  video: false,
})
