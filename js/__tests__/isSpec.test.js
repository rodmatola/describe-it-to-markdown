const isSpec = require('../functions/isSpec');
const fileNames = require('./fixtures/filenames');

describe('isSpec test', () => {
  test('should return only .spec.[js, ts] files', () => {
    fileNames.forEach((fileName) => {
      expect(isSpec(fileName)).toBeTruthy();
    });
  });
});
