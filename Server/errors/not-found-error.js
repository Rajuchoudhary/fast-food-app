import CustomError from './custom-error.js';

class NotFoundError extends CustomError {
  statusCode = 404;
  constructor() {
    super('Route not found');
  }

  serializeErrors() {
    return [{ message: 'Not Found' }];
  }
}

export default NotFoundError;
