import { Kafka } from 'kafkajs';
import logger from 'logger';
import config from 'config';

const kafka = new Kafka({ brokers: [config.get('kafkaHost')] });
let consumer = null;

export const createGroup = (groupId) => {
  consumer = kafka.consumer({ groupId });
};

export const connect = async () => {
  logger.info(`Connecting kafka consumer`);

  await consumer.connect();
};

export const subscribe = async (topics) => {
  logger.info(`Subscribing topics ${JSON.stringify(topics)}`);

  await topics.forEach(async (topic) => {
    await consumer.subscribe({ topic });
  });
};

export const consume = async (onMessageReceived) => {
  await consumer.run({
    autoCommit: false,
    eachMessage: onMessageReceived,
  });
};

export const commit = (data) => {
  const { topic, partition, message } = data;
  const { offset } = message;

  consumer.commitOffsets([
    { topic, partition, offset: (parseInt(offset, 10) + 1).toString() },
  ]);
};
