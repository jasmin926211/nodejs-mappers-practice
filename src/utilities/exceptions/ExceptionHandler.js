import generateException from './generateException';

class ExceptionHandler extends Error {
  /**
   *
   * @param {number} statusCode valid http status code eg. 401
   * @param {string} title title of error eg. login failed
   * @param {string} description description of error eg. Login failed because of invalid credentials
   * @param {string} type url to the type definition of errors
   */
  constructor(exception) {
    super();
    generateException(this, 500, 'Something Went Wrong', exception);
  }
}

export default ExceptionHandler;
