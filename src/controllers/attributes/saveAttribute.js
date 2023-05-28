import logger from 'logger';
import { saveAttributeService } from 'services/attributes';

const saveAttribute = (req, res, next) => {
  logger.info('Executing saveAttribute controller');

  return saveAttributeService(req.body)
    .then((savedAttribute) => {
      logger.info('Successfully executed saveAttribute controller');
      res.send(savedAttribute);
    })
    .catch((error) => {
      logger.error(
        `Error occurred while executing saveAttribute controller ${error}`,
      );
      next(error);
    });
};

export default saveAttribute;
