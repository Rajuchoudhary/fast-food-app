class CustomError extends Error {
  statusCode;
  constructor(message) {
    super(message);
  }
  serializeErrors() {}
}

export default CustomError;
