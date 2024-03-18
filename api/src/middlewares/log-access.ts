import morgan from 'morgan';
import { createLogger, format, transports } from 'winston';

const { env, logLevel } = require('../config');

const logger = createLogger({
  format: format.json(),
  transports: !['test'].includes(env)
    ? [
        new transports.Console({
          level: logLevel,
          format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.colorize(),
            format.simple()
          ),
          handleExceptions: true,
        }),
      ]
    : [
        new transports.Console({
          format: format.simple(),
        }),
      ],
});

export const logAccess = () =>
  morgan(env !== 'development' ? 'combined' : 'tiny', {
    stream: {
      write: (message: any) => {
        logger.info(message);
      },
    }
  });

export default logAccess;
