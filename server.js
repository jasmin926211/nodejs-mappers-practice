import express from 'express';
import cors from 'cors';
import promBundle from 'express-prom-bundle';
import controllers from 'controllers';
import logger from 'logger';
import config from 'config';
import { resourceNotFound, errorHandling } from 'middlewares';

import createKafkaTopics from 'kafka/createTopic';
import * as consumer from 'kafka/consumer';
import mongoConnection from './config/connection';
import kafkaListeners from './src/kafka/listeners';

import { GROUPS, TOPICS } from './src/kafka/constants';

const app = express();
const PORT = config.get('port');

// Initiate database connection
mongoConnection();

app.use(cors());

// Parse application/json
app.use(express.json());

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const metricsMiddleware = promBundle({
  includePath: true,
  buckets: [0.1, 0.4, 0.7],
  includeMethod: true,
  promClient: {
    collectDefaultMetrics: {},
  },
});
app.use(metricsMiddleware);

app.get('/attribute-mapper/health', (req, res) => {
  const healthStatus = { status: 'UP' };
  res.send(healthStatus);
});

// Loading all the routes
app.use('/attribute-mapper', controllers);

// Default 404 is returned if the route is not available

app.use(resourceNotFound);

app.use(errorHandling);

// Function to start express server
function startServer() {
  return app.listen(PORT, async () => {
    logger.info(
      `attribute-mapper Running on port ${PORT} in ${process.env.NODE_ENV} environment`,
    );

    // Creating topic
    await createKafkaTopics();

    // Consumer config
    await consumer.createGroup(GROUPS.ATTRIBUTE_MAPPER_GROUP);
    await consumer.connect();
    await consumer.subscribe(Object.values(TOPICS));
    await consumer.consume((data) => kafkaListeners[data.topic](data));
  });
}

// Start the server
const server = startServer();

// This function is not used much, it can be used in test-cases when server is mocked
function stopServer() {
  server.close(() => {
    process.exit();
  });
}

/**
 *  We are exporting start and stop server so that this
 * can be accessed by test cases to mock the server
 * */
module.exports = {
  startServer,
  stopServer,
  app,
};
