**Para versão em português, [README_pt-br.md](https://github.com/rodmatola/describe-it-to-markdown/blob/main/README_pt-br.md)**

# The problem

I was looking for some tool like [FeatureBook](https://www.npmjs.com/package/featurebook) or [Feature Express](https://www.npmjs.com/package/feature-express) for transform my `.spec` files in a report that I could share, without run the tests. Unfortunately, I didn't found anything...

Then I made this simple `.sh` script to do that for me.

# What it is

This script is a bunch of `grep`, `sed` and `awk` commands to replace the keywords `describe`, `context`, `it` to `Scenario`, `Context` and an ordered list, respectively.

As it's still under development, it's necessary to check it after running the script and make manual changes if necessary.

# How to run

- Place the `paraMD.sh` file in the root of the `cypress` folder
- give execute permission (if don't have) `chmod +x to MD.sh` or `chmod 777 to MD.sh` - if you don't care about permissions (you may need `sudo`)
- then `./toMD.sh`

To work, your scenarios must be inside the default Cypress `cypress/integration` folder. It will look at all files within that folder and subfolders. Any modification to your structure, also modify in the first line of `toMD.sh`, the path that is enclosed in square brackets in the example below, without the square brackets.

`egrep -Rw 'describe|context|it' [integration] > cenarios.md`

If you want to use it in another framework with the same syntax, do the same as above.

NOTE: Repeating the line `cenarios.md > cenariostemp.md && mv cenariostemp.md cenarios.md` is required on Mac because `sed -i`, which overwrites changes in the source file, does not work.

# Examples

login.spec.js

```javascript
describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Success login', () => {
    login('standard_user', 'secret_sauce');
    cy.get('#inventory_filter_container');
  });

  it('Wrong user/password', () => {
    login('standard_user', '123456');
    cy.get('.error-button');
  });
});
```

buy.spec.js

```javascript
describe('Buy', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    login('standard_user', 'secret_sauce');
  });

  it('Success purchase', () => {
    AllItens.buy();
    Information.fill_infos();
    Summary.confirm();
    cy.get('.complete-header');
  });
});
```

scenarios.md

```markdown
integration/cypress_poc/buy.spec.js

# Scenario: Buy

1. ## Success purchase
   integration/cypress_poc/login.spec.js

# Scenario: Login

1. ## Success login
1. ## Wrong user/password
```

No relatório fica

integration/cypress_poc/buy.spec.js

# Scenario: Buy

1. ## Success purchase
   integration/cypress_poc/login.spec.js

# Scenario: Login

1. ## Success login
1. ## Wrong user/password
