import { gql } from 'apollo-server-express';

import { server } from '../lib/graphql/server';

test('now query', async () => {
    const QUERY = gql`
        query NowQuery {
            now
        }
    `;

    const { data } = await server.executeOperation({ query: QUERY });

    expect(typeof data?.now).toBe('string');
});
