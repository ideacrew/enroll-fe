import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({

  e2e: {
    ...nxE2EPreset(__dirname),
    viewportWidth: 1400,
    viewportHeight: 800,
    video: false,
  } as Cypress.EndToEndConfigOptions | undefined,
});
