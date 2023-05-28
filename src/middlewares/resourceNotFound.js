import logger from 'logger';

const resourceNotFound = (req, res) => {
  logger.info({ message: `Cannot ${req.method} ${req.originalUrl}` });
  res.status(404).json({ error: `Cannot ${req.method} ${req.originalUrl}` });
};

export default resourceNotFound;
