import logger from 'logger';
import { updateEntityService } from 'services/entities';

const updateEntity = (req, res, next) => {
  logger.info('Executing updateEntity controller');

  return updateEntityService(req.body)
    .then((updatedEntity) => {
      logger.info('Successfully executed updateEntity controller');
      res.send(updatedEntity);
    })
    .catch((error) => {
      logger.error(
        `Error occurred while executing updateEntity controller ${error}`,
      );
      next(error);
    });
};

export default updateEntity;
