const hello = require('./pillars');

describe('pillars', () => {
  it('should return pillars', () => {
    expect(pillars(1, 10, 10)).toBe(0);
  });
});
