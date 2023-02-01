const fs = require('fs');

// Establish the current tenant by grabbing the tenant Environment Variable
const tenant = process.env.TENANT; // 'dc' or 'me'

if (!tenant) {
  console.error('TENANT environment variable not set');
  process.exit(1);
}

// Check if the dist/apps directory exists, exit if it does not
if (!fs.existsSync('dist/apps/console')) {
  console.error('Dist directory does not exist, exiting script');
  process.exit(1);
}

// Grab reference to the correct favicon file
const faviconPath = `dist/apps/console/${tenant}-favicon.svg`;

console.log('Replacing favicon with', faviconPath);
// overwrite favicon with faviconPath at root of application folder
fs.copyFileSync(faviconPath, 'dist/apps/console/favicon.svg');

// Read contents of new svg
const svg = fs.readFileSync('dist/apps/console/favicon.svg', 'utf8');
console.log('Replaced!', svg);
