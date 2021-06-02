import joi from 'joi';

import { logger } from './logger';

const schema = joi.object({
    LOG_FORMAT: joi.string().default('combined'),
});

const { error, value } = schema.validate(process.env, { convert: true, stripUnknown: true });

if (error) {
    logger.error(error.stack);
    process.exit(1);
}

/**
 * The pathname to serve GraphQL requests
 */
export const GRAPHQL_PATH = '/graphql';

/**
 * The Apollo healthcheck path
 */
export const HEALTHCHECK = '/.well-known/apollo/server-health';

/**
 * The morgan log format
 */
export const LOG_FORMAT: string = value.LOG_FORMAT;

/**
 * The application port
 */
export const PORT = 4000;
