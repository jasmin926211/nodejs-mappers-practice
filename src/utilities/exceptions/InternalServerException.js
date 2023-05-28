import logger from '#/logger';

import generateException from './generateException';

class InternalServerException extends Error {
  constructor(exception, data) {
    super();
    logger.error(data ? `${exception} ${data}` : exception);
    generateException(this, 500, 'Internal Server Error', exception);
  }
}

export default InternalServerException;
