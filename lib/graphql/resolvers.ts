import { Resolvers } from '../../__generated__/resolver-types';

export const resolvers: Resolvers = {
    Query: {
        now: (obj, args, ctx) => ctx.now.toISOString(),
    },
};
