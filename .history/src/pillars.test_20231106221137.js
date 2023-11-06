const pillars = require('./pillars');

describe('pillars', () => {
  it('1, 10, 10 should return 0', () => {
    expect(pillars(1, 10, 10)).toBe(0);
  });
  it('2, 20, 25 should return 2000', () => {
    expect(pillars(2, 20, 25)).toBe(2000);
  });
  it('11, 15, 30 should return 15270', () => {
    expect(pillars(11, 15, 30)).toBe(15270);
  });
});
