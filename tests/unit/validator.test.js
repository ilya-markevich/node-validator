import Validator from '../../src/validator';

describe('Validator', () => {
  describe('Initial state', () => {
    it('should set initial state', async () => {
      const objToValidate = { data: 'test data', name: 'test name' };
      const validator = new Validator(objToValidate);

      expect(validator.getValidationObject()).toEqual(objToValidate);
      expect(await validator.getErrors()).toEqual([]);
      expect(await validator.hasErrors()).toBe(false);
    });
  });

  describe('#property', () => {
    it('should ignore invalid array path', async () => {
      const validator = new Validator({ a: { b: null } });

      validator.property('a[].b').isNotEmpty();
      expect(await validator.hasErrors()).toBe(false);
    });
  });

  describe('#optional', () => {
    it('should apply optional option for null value', async () => {
      const validator = new Validator({ a: null });

      validator.property('a').optional().isInteger();
      expect(await validator.hasErrors()).toBe(false);
    });

    it('should apply optional option for undefined value', async () => {
      const validator = new Validator({});

      validator.property('a').optional().isInteger();
      expect(await validator.hasErrors()).toBe(false);
    });

    it('should apply optional option for array value', async () => {
      const validator = new Validator({ a: [{ b: null }] });

      validator.property('a[].b').optional().isInteger();
      expect(await validator.hasErrors()).toBe(false);
    });
  });

  describe('#withMessage', () => {
    it('should apply custom message', async () => {
      const validator = new Validator({ a: '' });

      validator.property('a').isNotEmpty().withMessage('invalid');
      expect(await validator.getErrors()).toMatchObject([{ errorMessage: 'invalid' }]);
    });

    it('should apply custom message for array value', async () => {
      const validator = new Validator({ a: [{ b: null }] });

      validator.property('a[].b').isNotEmpty().withMessage('invalid');
      expect(await validator.getErrors()).toMatchObject([{ errorMessage: 'invalid' }]);
    });
  });
});
