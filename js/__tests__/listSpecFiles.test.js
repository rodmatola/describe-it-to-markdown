const listSpecFiles = require('../functions/listSpecFiles');
const isSpec = require('../functions/isSpec');
const fileList = require('./fixtures/fileList');

describe('listSpecFiles test', () => {
  test('should return only .spec.*', () => {
    const list = listSpecFiles(fileList);
    list.forEach((name) => {
      expect(isSpec(name)).toBeTruthy();
    });
  });
});
