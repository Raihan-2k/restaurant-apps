const sum = (a, b) => a + b;

describe('A Sample Test for Sum', () => {
  it('should return a + b value', () => {
    // eslint-disable-next-line no-undef
    expect(sum(2, 3))
      .toEqual(5);
  });
});
