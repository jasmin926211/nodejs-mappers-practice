import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Entities from 'models/Entities';

const deleteEntity = (params) => {
  logger.info('Executing deleteEntities service');

  return new Promise((resolve, reject) => {
    Entities.findByIdAndDelete(params.id)
      .then((fetchedEntities) => {
        logger.info('deleteEntities service executed successfully');

        return resolve(fetchedEntities);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing deleteEntities ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while delete entity'),
        );
      });
  });
};

export default deleteEntity;
