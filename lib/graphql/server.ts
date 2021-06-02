import { readFileSync } from 'fs';
import { join } from 'path';

import { ApolloServer } from 'apollo-server-express';

import { logger } from '../logger';

import { createContext } from './context';
import { resolvers } from './resolvers';

const typeDefs = readFileSync(join(__dirname, 'schema.graphql'), 'utf8');

export const server = new ApolloServer({
    context: createContext,
    debug: process.env.NODE_ENV !== 'production',
    logger,
    resolvers,
    typeDefs,
});
