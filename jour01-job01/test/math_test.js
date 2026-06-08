const addition = require('./math');

test('ajoute 1 + 2 pour égaler 3', () => {
  expect(addition(1, 2)).toBe(3);
});