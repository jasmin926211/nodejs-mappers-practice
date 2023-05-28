import logger from '#/logger';

import generateException from './generateException';

class ForbiddenException extends Error {
  constructor(exception, data) {
    super();

    logger.error(data ? `${exception} ${data}` : exception);
    generateException(this, 403, 'Forbidden', exception);
  }
}

export default ForbiddenException;
