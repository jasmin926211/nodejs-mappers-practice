import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Attributes from 'models/Attributes';

const updateAttribute = (attributeDetails) => {
  console.log(attributeDetails);
  logger.info('Executing updateAttribute service');

  return new Promise((resolve, reject) => {
    Attributes.findOneAndUpdate(
      // eslint-disable-next-line no-underscore-dangle
      { _id: attributeDetails._id },
      attributeDetails,
      {
        new: true,
      },
    )
      .then((updatedAttribute) => {
        logger.info('updateAttribute service executed successfully');

        return resolve(updatedAttribute);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing updateAttributeService ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving attribute'),
        );
      });
  });
};

export default updateAttribute;
