const glob = require('glob');
const isSpec = require('./isSpec');

const listSpecFiles = (specPath) => {
  if (!specPath.endsWith('/')) {
    specPath = `${specPath}/`;
  }
  const files = glob.sync(`${specPath}**/*`);

  var specList = [];
  files.forEach((file) => {
    if (isSpec(file)) {
      specList.push(file);
    }
  });

  return specList;
};

module.exports = listSpecFiles;
