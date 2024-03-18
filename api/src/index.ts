/* eslint-disable no-undef */
import util from 'util';
import dotenv from 'dotenv';
dotenv.config();

import App from './app';

const app = new App();
const server = app.listen();

// Graceful Shutdown
// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
// const gracefulShutdown = () => {
//   logger.debug('SIGINT/SIGTERM signal received: closing HTTP server');
//   server.close(() => {
//     logger.debug('HTTP server closed');
//   });
// };

// process
//   .removeAllListeners('SIGINT')
//   .on('SIGINT', gracefulShutdown)
//   .removeAllListeners('SIGTERM')
//   .on('SIGTERM', gracefulShutdown);
