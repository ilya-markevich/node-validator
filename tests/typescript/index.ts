import Validator from '../../index';

const validator = new Validator({
  test: 1
});

validator.property('test').optional().isString();

