const sut = require("..");
path = require('path');
const becrowdId = '2388';
const cases = [
  { input: path.resolve(__dirname, `./files/${becrowdId}-1.txt`), expected: 9660 },
  { input: path.resolve(__dirname, `./files/${becrowdId}-2.txt`), expected: 26022 },
  { input: path.resolve(__dirname, `./files/${becrowdId}-3.txt`), expected: 21205 },
];

describe('2388', () => {
  test.each(cases)(`${becrowdId}-%#`, ({input, expected}) => {
    const res = sut(path.resolve(input));
    expect(res).toBe(expected);
  });
});
