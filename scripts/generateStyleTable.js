/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { build } = require('../dist/build');
const { execSync } = require('child_process');

const styles = build();

const header = `
|Tachyon|Output|
|-----|----------------------------|`;

const formatRow = (tachyon, value) => `|${tachyon}|\`${JSON.stringify(value)}\`|`;
const appendLine = (text, lineText) => text + '\n' + lineText;

const output = Object.entries(styles).reduce(
  (fileOutput, [key, value]) => appendLine(fileOutput, formatRow(key, value)),
  header
);

try {
  console.log('Updating documentation.');
  fs.writeFileSync(path.resolve('./docs/styles.md'), output);
  console.log('Update Complete');
} catch (error) {
  console.error('Error updating documentation');
  console.log;
}

try {
  console.log('Committing changes.');
  execSync('git commit -am "documentation update"');
} catch (error) {
  console.log('Error committing changes.');
}
