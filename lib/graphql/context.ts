import { ContextFunction } from 'apollo-server-core';
import { ExpressContext } from 'apollo-server-express';

export interface Context {
    now: Date;
}

export const createContext: ContextFunction<ExpressContext, Context> = () => ({
    now: new Date(),
});
