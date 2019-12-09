/* eslint-disable no-console */
const run = require('./run');
const getChangeLog = require('./getChangeLog');

const { version } = require('../package.json');

const say = (...args) => console.log(...args);

function draftRelease() {
  // check for github cli
  run('hub --version');
  const changeLog = getChangeLog();

  say('pushing latest changes');
  run('git push');

  say('Creating draft release.');
  run(`hub release create -d v${version} -m "v${version}" -m "${changeLog}"`);
}

try {
  draftRelease();
} catch (error) {
  console.error(error);
  console.error('release script failed');
}
