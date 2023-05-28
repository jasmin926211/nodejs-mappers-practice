import { TOPICS } from '../constants';

import entityMapperListener from './entityMapperListener';

export default {
  [TOPICS.ENTITY_MAPPER_TOPIC]: entityMapperListener,
};
