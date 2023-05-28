import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Entities from 'models/Entities';

const saveEntity = (entityDetails) => {
  logger.info('Executing saveEntity service');

  return new Promise((resolve, reject) => {
    const entity = new Entities(entityDetails);

    entity
      .save()
      .then((savedEntity) => {
        logger.info('saveEntity service executed successfully');

        return resolve(savedEntity);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing saveEntityService ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving entity'),
        );
      });
  });
};

export default saveEntity;
