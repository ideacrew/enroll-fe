const fs = require('fs');

// Establish the current tenant by grabbing the tenant Environment Variable
const tenant = process.env.TENANT; // 'dc' or 'me'

if (!tenant) {
  throw new Error('TENANT environment variable not set');
}

// Grab reference to the correct favicon file
const faviconPath = `dist/apps/slcsp-calculator/assets/logos/${tenant}-favicon.svg`;

// overwrite favicon with faviconPath at root of application folder
fs.copyFileSync(faviconPath, 'dist/apps/slcsp-calculator/favicon.svg');
