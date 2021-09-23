const path = require('path');

const isSpec = (fileName) => {
  const ext = path.extname(fileName);
  if (ext === '.js' || ext === '.ts') {
    const name = path.parse(fileName);
    if (path.extname(name.name) === '.spec') {
      return true;
    }
  }
  return false;
};

module.exports = isSpec;
