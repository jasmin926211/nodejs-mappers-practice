import logger from 'logger';
import { saveEntityService } from 'services/entities';

const saveEntity = (req, res, next) => {
  logger.info('Executing saveEntity controller');

  return saveEntityService(req.body)
    .then((savedEntity) => {
      logger.info('Successfully executed saveEntity controller');
      res.send(savedEntity);
    })
    .catch((error) => {
      logger.error(
        `Error occurred while executing saveEntity controller ${error}`,
      );
      next(error);
    });
};

export default saveEntity;
