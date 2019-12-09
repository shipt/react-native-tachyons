const { execSync } = require('child_process');
const run = cmd => execSync(cmd, { encoding: 'utf8' });

module.exports = run;
