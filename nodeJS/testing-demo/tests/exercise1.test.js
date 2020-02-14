const lib = require('../exercise1');

describe('fizzBuzz', () => {
  it('should throw an exception if input is not a number', () => {
    expect(() => {
      lib.fizzBuzz('a');
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(null);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz(undefined);
    }).toThrow();
    expect(() => {
      lib.fizzBuzz();
    }).toThrow();
  });

  it('should return Fizzbuzz if input is divisible by 3 and 5', () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
});
