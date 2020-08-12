import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import UsersController from './controllers/UsersController';
import SessionController from './controllers/SessionController';

import authMiddleware from '../src/middleware/ensureAuthenticated';

const routes = express.Router();
const usersController = new UsersController;
const classesController = new ClassesController;
const connectionsController = new ConnectionsController;
const sessionController = new SessionController;

routes.post('/users', usersController.create);
routes.post('/sessions', sessionController.create);

routes.use(authMiddleware);

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
