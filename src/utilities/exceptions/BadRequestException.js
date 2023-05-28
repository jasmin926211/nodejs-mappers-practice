import generateException from './generateException';

class BadRequestException extends Error {
  constructor(exception) {
    super();
    generateException(this, 400, 'Bad request', exception);
  }
}

export default BadRequestException;
