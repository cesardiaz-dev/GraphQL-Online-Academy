import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import resolvers from '../resolvers/resolversMap.js';

const typeDefs = await loadSchemaSync("./**/schema/schema.graphql",
    { loaders: [new GraphQLFileLoader()] });

const schema = {
    typeDefs,
    resolvers
};

export { 
    schema
};