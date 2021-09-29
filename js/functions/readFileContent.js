const fs = require('fs');

const readFileContent = (file) => {
  try {
    const data = fs.readFileSync(file, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = readFileContent;
