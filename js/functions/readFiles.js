const fs = require('fs');
const glob = require('glob');
const isSpec = require('./isSpec');

const listSpecFiles = (specPath) => {
  glob(`${specPath}**/*`, (er, files) => {
    files.forEach((file) => {
      if (isSpec(file)) {
        // const data = fs.readFileSync(`${file}`, 'utf8');
        console.log(file);
      }
    });
  });
};

module.exports = listSpecFiles;
