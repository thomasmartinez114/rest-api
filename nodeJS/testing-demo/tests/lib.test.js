const lib = require('../lib');
const db = require('../db');

// describe('absolute', () => {
//   it('should return a positive number if input is positive', () => {
//     const result = lib.absolute(1);
//     expect(result).toBe(1);
//   });

//   it('should return a positive number if input is negative', () => {
//     const result = lib.absolute(-1);
//     expect(result).toBe(1);
//   });

//   it('should return 0 if input is 0', () => {
//     const result = lib.absolute(0);
//     expect(result).toBe(0);
//   });
// });

// describe('greet', () => {
//   it('should return the greeting message', () => {
//     const result = lib.greet('Mosh');
//     expect(result).toMatch(/Mosh/); // Regular expression
//     expect(result).toContain('Mosh'); // Another way w/o RegEx
//   });
// });

// describe('getCurrencies', () => {
//   it('should return supported currencies', () => {
//     const result = lib.getCurrencies();

//     // Too general testing - bad
//     expect(result).toBeDefined();
//     expect(result).not.toBeNull();

//     // Too specific
//     expect(result[0]).toBe('USD');
//     expect(result[1]).toBe('AUD');
//     expect(result[2]).toBe('EUR');
//     expect(result.length).toBe(3);

//     // Proper way
//     expect(result).toContain('USD');
//     expect(result).toContain('AUD');
//     expect(result).toContain('EUR');

//     // Ideal way
//     expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
//   });
// });

// describe('getProduct', () => {
//   it('should return the product with the given id', () => {
//     const result = lib.getProduct(1);

//     // Test obj with the same # of properites
//     expect(result).toEqual({ id: 1, price: 10 });

//     // this will look in the obj for just the listed properities
//     expect(result).toMatchObject({ id: 1, price: 10 });
//   });
// });

// describe('registerUser', () => {
//   it('should throw if username is falsy', () => {
//     const args = [null, undefined, NaN, '', 0, false];
//     args.forEach(a => {
//       expect(() => {
//         lib.registerUser(null);
//       }).toThrow();
//     });
//   });

//   it('should return a user object if valid username is passed', () => {
//     const result = lib.registerUser('mosh');
//     expect(result).toMatchObject({ username: 'mosh' });
//     expect(result.id).toBeGreaterThan(0);
//   });
// });

describe('applyDiscount', () => {
  it('should apply 10% if customer has more than 10 points', () => {
    db.getCustomerSync = function(customerId) {
      console.log('Fake reading customer....');
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
