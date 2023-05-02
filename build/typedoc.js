const tdUtils = require(__dirname + '/typedoc_utils');

let REFLECTION_ID = 0;

// Add applications here
// to have them documented
const applicationList = [
  tdUtils.referenceApp('@enroll/console', './apps/console'),
  // This one is too funky to just reference a root file.
  {
    name: '@enroll/slcsp-calculator',
    tsconfig: './apps/slcsp-calculator/tsconfig.app.json',
    entryPoints: [
      './apps/slcsp-calculator/src/app/app.component.ts',
      './apps/slcsp-calculator/src/app/application.routes.ts',
      './apps/slcsp-calculator/src/app/i18n.module.ts',
      './apps/slcsp-calculator/src/app/tenant-config.ts',
    ],
  },
];

tdUtils.buildDocs('enroll-fe', applicationList).catch(console.error);
