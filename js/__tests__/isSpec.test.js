const isSpec = require('../functions/isSpec');
const specNames = require('./fixtures/specNames');

describe('isSpec test', () => {
  test('should return only .spec.[js, ts] files', () => {
    specNames.forEach((specName) => {
      expect(isSpec(specName)).toBeTruthy();
    });
  });
});
