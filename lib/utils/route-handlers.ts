import { ErrorRequestHandler, RequestHandler } from 'express';

import { logger } from './logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (): ErrorRequestHandler => (err, req, res, next) => {
    const status: number = res.statusCode >= 400 ? res.statusCode : 500;
    logger.error(err.message, { method: req.method, status, url: req.originalUrl });
    res.sendStatus(status);
};

export const infoHandler = (): RequestHandler => (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
    });
};

export const notFoundHandler = (): RequestHandler => (req, res, next) => {
    res.status(404);
    next(new Error('Not found'));
};
