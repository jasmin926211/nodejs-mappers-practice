import dotenv from 'dotenv';
import winston, { addColors, format } from 'winston';

dotenv.config();

const formatParams = (info) => {
  const { timestamp, level, message, label, ...args } = info;

  return `${timestamp} ${level} ${label}: ${message} ${Object.keys(args).length ? JSON.stringify(args, '', '') : ''}`;
};

const alignColorsAndTime = format.combine(
  format.colorize({ all: true }),
  format.label({ label: '[LOGGER]' }),
  format.timestamp(),
  format.align(),
  format.printf(formatParams),
);

addColors({
  info: 'bold blue', // fontStyle color
  warn: 'italic yellow',
  error: 'bold red',
  debug: 'green',
});

const Logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), alignColorsAndTime),
      level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
      prettyPrint: true,
      colorize: true,
      timestamp: true,
    }),
  ],
});

export default Logger;
