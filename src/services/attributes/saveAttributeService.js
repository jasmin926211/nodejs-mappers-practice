import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Attributes from 'models/Attributes';

const saveAttribute = (attributeDetails) => {
  logger.info('Executing saveAttribute service');

  return new Promise((resolve, reject) => {
    const attribute = new Attributes(attributeDetails);
    attribute
      .save()
      .then((savedAttribute) => {
        logger.info('saveAttribute service executed successfully');

        return resolve(savedAttribute);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing saveAttributeService ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving attribute'),
        );
      });
  });
};

export default saveAttribute;
