import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from "./schema/index.js";


const server = new ApolloServer(schema);

const PORT = 5200;
const {url} = await startStandaloneServer(server, {
    listen: {port: PORT}
});

console.log(`🚀  Server ready at: ${url}`);