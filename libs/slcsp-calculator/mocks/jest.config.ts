/* eslint-disable @typescript-eslint/naming-convention */
export default {
  displayName: 'slcsp-calculator-mocks',
  preset: '../../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/libs/slcsp-calculator/mocks',
};
