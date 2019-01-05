import path from 'path';
import assert from 'assert';
import { CLIEngine } from 'eslint';

const lint = (dirname) => {
  const cli = new CLIEngine();
  const report = cli.executeOnFiles([dirname]);
  const results = report.results.filter(({ filePath }) => !filePath.endsWith('.spec.js'));
  return results;
};

describe('Linter config', () => {
  const report = lint(`${__dirname}/*/failures/**/*`);

  report.forEach((fileReport) => {
    const relative = path.relative(__dirname, fileReport.filePath);
    it(`should generate error for ${relative}`, () => {
      // console.log(fileReport);
      assert.ok(fileReport.errorCount > 0);
    });
  });
});
