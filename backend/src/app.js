import express from 'express';
import path from 'path';
// import * as Sentry from '@sentry/node';
import routes from './routes';

import './database';
import { isMonday } from 'date-fns/esm';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    ); // permite acesso aos arquivos de fotos
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
