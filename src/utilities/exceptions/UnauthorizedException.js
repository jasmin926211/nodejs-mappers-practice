import generateException from './generateException';

class UnauthorizedException extends Error {
  constructor(exception) {
    super();
    generateException(this, 401, 'Unauthorized request', exception);
  }
}

export default UnauthorizedException;
