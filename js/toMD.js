const listSpecFiles = require('./functions/listSpecFiles');

// const path = process.argv[2];
const fileName =
  '/Users/rodrigomatola/Vaultree/repos/website/cypress/integration/elements/blogElements.spec.js';

const specPath = '/Users/rodrigomatola/Vaultree/repos/website/cypress/';
//   '/Users/rodrigomatola/TestandoSuave/repos/cypressXselenium-ruby-rspec-main/cypress/cypress/integration/';

const files = listSpecFiles(specPath);
console.log(files);
