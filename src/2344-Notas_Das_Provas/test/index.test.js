const sut = require("..");
path = require('path');
const becrowdId = '2344';

const cases = [
  { input: path.resolve(__dirname, `./files/${becrowdId}-1.txt`), expected: 'D' },
  { input: path.resolve(__dirname, `./files/${becrowdId}-2.txt`), expected: 'A' },
  { input: path.resolve(__dirname, `./files/${becrowdId}-3.txt`), expected: 'E' },
];

test.each(cases)(`${becrowdId}-%#`, ({input, expected}) => {
  const res = sut(path.resolve(input));
  expect(res).toBe(expected);
});
