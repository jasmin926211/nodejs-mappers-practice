import logger from 'logger';
import { getEntityById as getEntityByIdService } from 'services/entities';

const getEntityById = (req, res, next) => {
  logger.info('Executing getEntityById controller');

  return getEntityByIdService(req.params)
    .then((fetchedAttribute) => {
      logger.info('Successfully executed getEntityById controller');
      res.send(fetchedAttribute);
    })
    .catch((error) => {
      logger.error(
        `Error occurred while executing getEntityById controller ${error}`,
      );
      next(error);
    });
};

export default getEntityById;
