import winston from 'winston';

import { name, version } from '../package.json';

export const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
    defaultMeta: {
        package: {
            name,
            version,
        },
    },
});
