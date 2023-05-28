import { Kafka } from 'kafkajs';
import logger from 'logger';
import config from 'config';

import { TOPICS } from './constants';

const kafka = new Kafka({ brokers: [config.get('kafkaHost')] });
const admin = kafka.admin();

const topics = [
  {
    topic: TOPICS.ENTITY_MAPPER_TOPIC,
    partitions: 1,
    replicationFactor: 1,
  },
];

const createKafkaTopics = async () => {
  try {
    logger.info(`Creating topics ${topics}`);

    await admin.createTopics({ topics });

    logger.info(`Topics created / already created`);
  } catch (error) {
    logger.error(`Error occurred while creating a topic ${error}`, 'error');
  }
};

export default createKafkaTopics;
