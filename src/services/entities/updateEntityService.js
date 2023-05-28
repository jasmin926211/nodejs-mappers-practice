import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Entities from 'models/Entities';

const updateEntity = (entityDetails) => {
  logger.info('Executing updateEntity service');

  const { id, ...rest } = entityDetails;

  return new Promise((resolve, reject) => {
    Entities.findOneAndUpdate({ _id: id }, { $set: rest }, { new: true })
      .then((updatedEntity) => {
        logger.info('updateEntity service executed successfully');

        return resolve(updatedEntity);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing updateEntityService ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving entity'),
        );
      });
  });
};

export default updateEntity;
