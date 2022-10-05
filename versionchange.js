const path = require('path');
const fs = require('fs');
const gitBranchIs = require('git-branch-is');

gitBranchIs('main')
  .then(() => {
    const currentVersionJsonPath = path.join(__dirname, 'public', 'currentversion.json');

    const currentVersion = JSON.parse(
      fs.readFileSync(currentVersionJsonPath, {
        encoding: 'utf-8',
        flag: 'r',
      }),
    ).version;

    fs.writeFileSync(currentVersionJsonPath, `{"version": ${currentVersion + 0.01}}`, {
      encoding: 'utf-8',
      flag: 'w',
    });
  })
  .catch((err) => {
    console.err(err);
  });
