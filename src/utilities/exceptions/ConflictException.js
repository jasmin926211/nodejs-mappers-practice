import logger from '#/config/logger';

import generateException from './generateException';

class ConflictException extends Error {
  constructor(exception, data) {
    super();
    logger.error(data ? `${exception} ${data}` : exception);
    generateException(this, 409, 'Conflict', exception);
  }
}

export default ConflictException;
