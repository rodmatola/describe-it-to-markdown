const listSpecFiles = require('./functions/listSpecFiles');

// const path = process.argv[2];
const fileName =
  '/Users/rodrigomatola/TestandoSuave/repos/cypress-realworld-app/cypress/tests/ui/auth.spec.ts';

const specPath =
  '/Users/rodrigomatola/TestandoSuave/repos/cypress-realworld-app/cypress';
//   '/Users/rodrigomatola/TestandoSuave/repos/cypressXselenium-ruby-rspec-main/cypress/cypress/integration/';

const files = listSpecFiles(specPath);
console.log(files);
