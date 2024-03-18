/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */

import util from 'util';
import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import _get from 'lodash/get';
import { Router, Request, Response } from 'express';

import pkg from '../package.json';
import config from './config';
import faviconMiddleware from './middlewares/favicon';
import healthMiddleware from './middlewares/health';
import logAccess from './middlewares/log-access';
// import appRoutes from './routes/app';
import errorsMiddleware, { errorNotFoundMiddleware } from './middlewares/errors';

class App {
  public app: Application;

  constructor() {
    this.app = express();
  }

  public listen() {
    // Global variables
    const appEnv = _get(config, 'env', 'development');
    const appName = _get(config, 'app.name', 'api');
    const appPort = _get(config, 'app.port', 3000);

    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());

    this.app.use(faviconMiddleware());
    this.app.use(healthMiddleware());
    this.app.use(logAccess());
    // this.app.use(appRoutes());
    this.app.use(errorsMiddleware());
    this.app.use(errorNotFoundMiddleware());
    this.app.listen(appPort, () => {
      console.info(
        util.format(
          '%s: Express server listening on port %d in %s mode',
          appName,
          appPort,
          appEnv
        )
      );
      if (appEnv === 'development') {
        console.info(util.format('Open http://localhost:%d', appPort));
      }
    })
  }
}

export default App;
