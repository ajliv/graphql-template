import express from 'express';
import morgan from 'morgan';

import { GRAPHQL_PATH, LOG_FORMAT } from './config';
import { server } from './graphql/server';
import { routes } from './routes';
import { logger } from './utils/logger';

export const app = express();

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(morgan(LOG_FORMAT, { stream: { write: (str) => logger.info(str.replace(/\n$/, '')) } }));
app.use(server.getMiddleware({ path: GRAPHQL_PATH }), routes);
