import logger from 'logger';

// eslint-disable-next-line no-unused-vars
const errorHandling = (err, req, res, next) => {
  if (err.statusCode && err.title) {
    res.status(err.statusCode).json({
      error: {
        title: err.title,
        description: err.description,
      },
      type: err.type,
    });
  } else {
    logger.error(`Uncaught error occurred status : 500 ${err}`);
    res.status(500).json({
      error: {
        title: 'Request timed out',
        description: 'Request has timed out, please try again',
      },
      type: err.type,
    });
  }
};

export default errorHandling;
