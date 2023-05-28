import generateException from './generateException';

class ServerException extends Error {
  constructor(exception) {
    super();
    generateException(this, 500, 'Request Timed out', exception);
  }
}

export default ServerException;
