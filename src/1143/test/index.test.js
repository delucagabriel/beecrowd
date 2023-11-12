const sut = require("..");
path = require('path');
const becrowdId = '1143';
const result = [
[1,1,1],
[2, 4, 8],
[3, 9, 27],
[4, 16, 64],
[5, 25, 125]
];

global.console = {log: jest.fn()}

const cases = [
  { input: path.resolve(__dirname, `./files/${becrowdId}-1.txt`), expected: result },
];

describe('1143', () => {
  test.each(cases)(`${becrowdId}-%#`, ({input, expected}) => {
    sut(path.resolve(input));
    const spy = jest.spyOn(console, 'log');
    expect(spy).toHaveBeenCalledTimes(5);
    for(let i = 0; i < 5; i++) {
      expect(spy).toHaveBeenNthCalledWith(i+1, ...expected[i]);
    }
  });
});
