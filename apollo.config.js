module.exports = {
    client: {
        includes: ['./test/**/*.ts'],
        service: {
            name: 'local',
            localSchemaFile: './lib/graphql/schema.graphql',
        },
    },
};
