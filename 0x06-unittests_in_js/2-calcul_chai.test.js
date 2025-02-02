const assert = require('chai');
const calculateNumber = require('./1-calcul');
except = assert.except;

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers', () => {
      except(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
    });

    it('equal negative numbers', () => {
      except(calculateNumber('SUM', -2.0, -2.0)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      except(calculateNumber('SUM', -2.0, 2.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      except(calculateNumber('SUM', 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', () => {
      except(calculateNumber('SUM', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    it('equal positive numbers', () => {
      except(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
    });

    it('equal negative numbers', () => {
      except(calculateNumber('SUBTRACT', -2.0, -2.0)).to.equal(0);
    });

    it('negative and positive numbers', () => {
      except(calculateNumber('SUBTRACT', -2.0, 2.0)).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      except(calculateNumber('SUBTRACT', 2.0, -2.0)).to.equal(4.0);
    });

    it('0 and 0', () => {
      except(calculateNumber('SUBTRACT', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "MULTIPLY"', () => {
    it('equal positive numbers', () => {
      except(calculateNumber('MULTIPLY', 2.0, 2.0)).to.equal(4);
    });

    it('equal negative numbers', () => {
      except(calculateNumber('MULTIPLY', -2.0, -2.0)).to.equal(-4);
    });

    it('negative and positive numbers', () => {
      except(calculateNumber('MULTIPLY', -2.0, 2.0)).to.equal(0);
    });

    it('positive and negative numbers', () => {
      except(calculateNumber('MULTIPLY', 2.0, -2.0)).to.equal(0);
    });

    it('0 and 0', () => {
      except(calculateNumber('MULTIPLY', 0.0, 0.0)).to.equal(0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      except(calculateNumber('DIVIDE', 8.0, 2.0)).to.equal(4.0);
    });

    it('numbers with different signs', () => {
      except(calculateNumber('DIVIDE', -7.0, 2.0)).to.equal(-3.5);
    });

    it('numbers with different signs (alternate)', () => {
      except(calculateNumber('DIVIDE', 7.0, -2.0)).to.equal(-3.5);
    });

    it('negative numbers', () => {
      except(calculateNumber('DIVIDE', -7.0, -2.0)).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      except(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
    });

    it('equal negative numbers', () => {
      except(calculateNumber('DIVIDE', -2.0, -2.0)).to.equal(1);
    });

    it('0 and positive number', () => {
      except(calculateNumber('DIVIDE', 0.0, 5.0)).to.equal(0);
    });

    it('0 and negative number', () => {
      except(calculateNumber('DIVIDE', 0.0, -5.0)).to.equal(-0);
    });

    it('positive number and 0', () => {
     except(calculateNumber('DIVIDE', 5.0, 0)).to.equal('Error: Division by 0');
    });

    it('negative number and 0', () => {
      except(calculateNumber('DIVIDE', -5.0, 0)).to.equal('Error: Division by 0');
    });

    it('0 and 0', () => {
      except(calculateNumber('DIVIDE', 0.0, 0.0)).to.equal'Error: Division by 0');
    });
  });
});
