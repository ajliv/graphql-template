import { readFileSync } from 'fs';
import { join } from 'path';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';

import { GRAPHQL_PATH, LOG_FORMAT } from './config';
import { createContext } from './graphql/context';
import { resolvers } from './graphql/resolvers';
import { logger } from './logger';
import { routes } from './routes';

const typeDefs = readFileSync(join(__dirname, 'graphql/schema.graphql'), 'utf8');

export const server = new ApolloServer({
    context: createContext,
    resolvers,
    typeDefs,
});

const app = express();

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(morgan(LOG_FORMAT, { stream: { write: (str) => logger.info(str.replace(/\n$/, '')) } }));
app.use(server.getMiddleware({ path: GRAPHQL_PATH }), routes());

export { app };
