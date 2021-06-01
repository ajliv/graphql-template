import { QueryResolvers, Resolvers } from '../../__generated__/resolver-types';

export const Query: QueryResolvers = {
    now: (obj, args, ctx) => {
        return ctx.now.toISOString();
    },
};

export const resolvers: Resolvers = {
    Query,
};
