const ts = require('typescript');
const fs = require('fs');

const text = fs.readFileSync('./tsconfig.json');
const configFile = ts.parseJsonConfigFileContent(
  JSON.parse(text.toString()),
  ts.sys,
  './'
);
const config = {
  compilerOptions: configFile.options,
  entryFile: './src/main.ts',
  noImplicitAdditionalProperties: 'silently-remove-extras',
  controllerPathGlobs: ['./src/**/*.controller.ts'],
  spec: {
    host: 'carrier-portal.openhbx.org',
    outputDirectory: './build',
    specVersion: 3,
    securityDefinitions: {
      BearerJWT: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    spec: {
      openapi: '3.0.0',
      swagger: '2.0',
    },
  },
  routes: {
    routesDir: './build',
  },
};

module.exports = config;
