const tacografo = require("..");
path = require('path');

const cases = [
  { input: path.resolve(__dirname, './files/2388-1.txt'), expected: 9660 },
  { input: path.resolve(__dirname, './files/2388-2.txt'), expected: 26022 },
  { input: path.resolve(__dirname, './files/2388-3.txt'), expected: 21205 },
];

describe('2388', () => {
  test.each(cases)('tacografo-%#', ({input, expected}) => {
    const res = tacografo(path.resolve(input));
    expect(res).toBe(expected);
  });
});
