const sut = require("..");
path = require('path');
const becrowdId = '3048';

const cases = [
  { input: path.resolve(__dirname, `./files/${becrowdId}-1.txt`), expected: 3 },
  { input: path.resolve(__dirname, `./files/${becrowdId}-2.txt`), expected: 7 },
  { input: path.resolve(__dirname, `./files/${becrowdId}-3.txt`), expected: 3 },
];

  test.each(cases)(`${becrowdId}-%#`, ({input, expected}) => {
    const res = sut(path.resolve(input));
    expect(res).toBe(expected);
  });

