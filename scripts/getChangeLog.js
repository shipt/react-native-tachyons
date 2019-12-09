/* eslint-disable no-console */
const run = require('./run');

const getCommitMessages = (currentTag, lastTag) =>
  run(`git log --pretty=format:%s ^${lastTag} ${currentTag}`)
    .split('\n')
    .slice(1)
    .filter(Boolean)
    .map(line => `- ${line}`)
    .join('\n');

module.exports = () => {
  // get current tag and last tag
  const tags = run('git tag --sort=-version:refname | head -n 2')
    .split('\n')
    .filter(Boolean);

  // get commit msgs between the tags
  return getCommitMessages(...tags);
};
