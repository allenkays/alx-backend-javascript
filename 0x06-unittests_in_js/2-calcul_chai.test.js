const expect = require('chai').expect;
const calculateNumber = require('./1-calcul.js'); // Update the import path

describe('calculateNumber', () => {
  describe('type SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('type SUBTRACT', () => {
    it('should return difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('type DIVIDE', () => {
    it('should return the division result of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" if b is rounded to 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });

  describe('invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(Error);
    });
  });
});
