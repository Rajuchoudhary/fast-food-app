import pkg from 'express-validator';
import RequestValidationError from '../errors/request-validation-error.js';
const { validationResult } = pkg;

const ValidateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  next();
};

export default ValidateRequest;
