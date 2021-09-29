const readFileContent = require('../functions/readFileContent');

const file = `${__dirname}/fixtures/lorenIpsum.txt`;
const string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate arcu arcu, vel auctor felis sollicitudin eget. Aenean at nibh sed lorem ornare sagittis non at augue. Donec fringilla leo eleifend, commodo sem sed, tincidunt neque. Duis placerat eu odio et aliquam. Praesent tristique, orci sed aliquet tristique, dui quam cursus diam, eleifend dictum neque purus lobortis nunc. Nunc sit amet eros id turpis accumsan hendrerit. Duis eu mi ornare, mollis purus et, varius augue. Sed in rutrum felis. Donec ultricies finibus diam, id volutpat justo malesuada interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi feugiat ullamcorper bibendum. Suspendisse aliquet pulvinar dolor, et pretium lectus sagittis ut. Phasellus molestie, nisi ac malesuada ultricies, erat eros imperdiet orci, et vulputate diam odio et dolor.';

describe('readFileContent test', () => {
  test('should return file content', () => {
    expect(readFileContent(file)).toEqual(string);
  });
});