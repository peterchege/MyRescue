const {sum, prod} = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('prod 2 * 4 to equal 8', () => {
    expect(prod(2, 4)).toBe(8);
});