import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  // eslint-disable-next-line unicorn/prefer-module
  e2e: nxE2EPreset(__dirname),
});
