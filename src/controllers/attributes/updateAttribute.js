import logger from 'logger';
import { updateAttributeService } from 'services/attributes';

const updateAttribute = (req, res, next) => {
  logger.info('Executing updateAttribute controller');

  return updateAttributeService(req.body)
    .then((updatedAttribute) => {
      logger.info('Successfully executed updateAttribute controller');
      res.send(updatedAttribute);
    })
    .catch((error) => {
      logger.error(
        `Error occurred while executing updateAttribute controller ${error}`,
      );
      next(error);
    });
};

export default updateAttribute;
