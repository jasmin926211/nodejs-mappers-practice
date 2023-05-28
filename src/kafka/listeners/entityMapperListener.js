import logger from 'logger';
import {
  saveEntityService,
  updateEntityService,
  deleteEntityService,
} from 'services/entities';
import { ENTITY_MAPPER_EVENT_TYPE } from '../constants';
import { commit } from '../consumer';

export default async (messageData) => {
  try {
    const { message } = messageData;
    const { value } = message;

    const entityData = JSON.parse(value.toString());
    const { type, data } = entityData;

    switch (type) {
      case ENTITY_MAPPER_EVENT_TYPE.CREATE:
        await saveEntityService(data);
        break;
      case ENTITY_MAPPER_EVENT_TYPE.UPDATE:
        await updateEntityService(data);
        break;
      case ENTITY_MAPPER_EVENT_TYPE.DELETE:
        await deleteEntityService(data);
        break;
      default:
        await saveEntityService(data);
        break;
    }
  } catch (error) {
    logger.error(
      `Error occurred while executing entity mapper listener ${error.stack}`,
    );
  } finally {
    commit(messageData);
  }
};
