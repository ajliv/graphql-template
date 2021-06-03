import { app } from './lib/app';
import { PORT } from './lib/config';
import { logger } from './lib/utils/logger';

const server = app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
});

const shutdown: NodeJS.SignalsListener = (signal) => {
    logger.info(`Got ${signal}. Graceful shutdown`);
    server.close(handleClose);
};

function handleClose(err?: Error): void {
    if (err) {
        logger.error(err);
        process.exit(1);
    }
    logger.info('Goodbye!');
    process.exit(0);
}

// quit on ctrl-c when running docker in terminal
process.on('SIGINT', shutdown);

// quit properly on docker stop
process.on('SIGTERM', shutdown);
