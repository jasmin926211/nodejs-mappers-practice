import logger from 'logger';
import { getAttributesService } from 'services/attributes';

const getAttributes = (req, res, next) => {
  logger.info('Executing getAttributes controller');

  return getAttributesService(req.body)
    .then((fetchedAttribute) => {
      logger.info('Successfully executed getAttributes controller');
      res.send(fetchedAttribute);
    })
    .catch((error) => {
      logger.error(
        `Error occurred while executing getAttributes controller ${error}`,
      );
      next(error);
    });
};

export default getAttributes;
