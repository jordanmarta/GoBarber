import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import auth from './config/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// O middleware só vai valer para as rotas que vierem abaixo dele...
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
