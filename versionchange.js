const path = require('path');
const fs = require('fs');

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
