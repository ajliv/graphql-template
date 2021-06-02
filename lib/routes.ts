import express from 'express';

import { infoHandler, notFoundHandler, errorHandler } from './utils/route-handlers';

export const routes = express.Router();

routes.get('/', infoHandler());
routes.use(notFoundHandler());
routes.use(errorHandler());
