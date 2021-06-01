import express from 'express';

import { infoHandler, notFoundHandler, errorHandler } from './utils/route-handlers';

export const routes = () => {
    const router = express.Router();

    router.get('/', infoHandler());
    router.use(notFoundHandler());
    router.use(errorHandler());

    return router;
};
