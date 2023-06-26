const nxPreset = require('@nx/jest/preset').default;

const globalConf = {
  // https://github.com/jestjs/jest/issues/13576#issuecomment-1572682459
  collectCoverage: true,
  coverageDirectory: `${process.env.NX_WORKSPACE_ROOT}/coverage/${process.env['NX_TASK_TARGET_PROJECT']}`,
};

module.exports = {
  ...nxPreset,
  ...globalConf,
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
};
