import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  port: process.env.PORT || 3002,
  logLevel: process.env.LOGLEVEL || 'debug',
  db: {
    connectionString:
      process.env.DB_URL || 'mongodb://127.0.0.1:27017/attribute-mapper',
  },
  kafkaHost: process.env.KAFKA_ENDPOINT || 'localhost:9092',
};
