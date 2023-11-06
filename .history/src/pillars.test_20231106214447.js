const hello = require('./pillars');

describe('pillars', () => {
  it('should return pillars', () => {
    expect(pillars()).toBe('pillars');
  });
});
