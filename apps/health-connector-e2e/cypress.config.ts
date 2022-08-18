import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

const cypressJsonConfig = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  video: false,
  videosFolder: '../../dist/cypress/apps/health-connector-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/health-connector-e2e/screenshots',
  chromeWebSecurity: false,
  specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'src/support/e2e.ts',
};
export default defineConfig({
  e2e: {
    // eslint-disable-next-line unicorn/prefer-module
    ...nxE2EPreset(__dirname),
    ...cypressJsonConfig,
  },
});
