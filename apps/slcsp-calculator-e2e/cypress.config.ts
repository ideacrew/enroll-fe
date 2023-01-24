import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  viewportWidth: 1400,
  viewportHeight: 800,
  e2e: {
    // eslint-disable-next-line unicorn/prefer-module
    ...nxE2EPreset(__dirname),
  },
});
