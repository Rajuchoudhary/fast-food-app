import CustomError from './custom-error.js';

class BadRequestError extends CustomError {
  statusCode = 400;
  constructor(message) {
    super(message);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}

export default BadRequestError;
