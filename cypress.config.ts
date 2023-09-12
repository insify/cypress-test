import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 844,
  viewportWidth: 390,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://doomal.github.io/',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
})
