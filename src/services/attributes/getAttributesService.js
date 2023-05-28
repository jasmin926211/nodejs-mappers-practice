import logger from 'logger';
import { ServerException } from 'utilities/exceptions';
import Attributes from 'models/Attributes';

const generateQuery = (attributeDetails, type) => {
  logger.info('Generating query for getAttributesService');

  const queryOrOperator = attributeDetails.map((attributeDetail) => {
    if (type === 'socialMedia') {
      return {
        attributeName: attributeDetail.metaDataName,
        'thirdPartyMappingDetails.thirdPartyName': attributeDetail.socialMedia,
      };
    }

    return {
      'thirdPartyMappingDetails.thirdPartyAttributeName':
        attributeDetail.metaDataName,
      'thirdPartyMappingDetails.thirdPartyName': attributeDetail.socialMedia,
    };
  });
  const query = { $or: queryOrOperator };
  logger.info(
    `Query generated for getAttributesService ${JSON.stringify(query)}`,
  );

  return query;
};

const getAttributes = (attributesMetaData) => {
  logger.info('Executing getAttributes service');
  const { socialMediaMetaData, metaData } = attributesMetaData;

  return new Promise((resolve, reject) => {
    const query = socialMediaMetaData
      ? generateQuery(socialMediaMetaData, 'socialMedia')
      : generateQuery(metaData, 'other');
    const projection = {
      attributeName: 1,
      attributeType: 1,
      thirdPartyMappingDetails: 1,
    };
    Attributes.find(query, projection)
      .then((fetchedAttributes) => {
        logger.info('getAttributes service executed successfully');

        return resolve(fetchedAttributes);
      })
      .catch((error) => {
        logger.error(
          `Error occurred while executing getAttributesService ${error.stack}`,
        );

        return reject(
          new ServerException('Something went wrong while saving attribute'),
        );
      });
  });
};

export default getAttributes;
