// __tests__/sample.test.js
const sum = require('../index');

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
