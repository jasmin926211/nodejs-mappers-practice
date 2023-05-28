import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Entities from 'models/Entities';

export const getEntityById = (params) => {
  logger.info('Executing getEntityById service');

  return new Promise((resolve, reject) => {
    Entities.findById(params.id)
      .then((fetchedEntities) => {
        logger.info('getEntityById service executed successfully');

        return resolve(fetchedEntities);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing getEntityById Service ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving entity'),
        );
      });
  });
};

export const getEntityByNameAndOwner = (params) => {
  logger.info('Executing getEntityByNameAndOwner service');

  return new Promise((resolve, reject) => {
    Entities.find({
      entityName: params.name,
      entityOwner: params.owner,
    })
      .then((fetchedEntities) => {
        logger.info('getEntityByNameAndOwner service executed successfully');

        return resolve(fetchedEntities);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing getEntityByNameAndOwner Service ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving entity'),
        );
      });
  });
};
