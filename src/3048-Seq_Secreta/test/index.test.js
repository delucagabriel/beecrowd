const tacografo = require("..");
path = require('path');

const cases = [
  { input: path.resolve(__dirname, './files/3048-1.txt'), expected: 3 },
  { input: path.resolve(__dirname, './files/3048-2.txt'), expected: 7 },
  { input: path.resolve(__dirname, './files/3048-3.txt'), expected: 3 },
];

describe('3048', () => {
  test.each(cases)('seqSecrt-%#', ({input, expected}) => {
    const res = tacografo(path.resolve(input));
    expect(res).toBe(expected);
  });
});
