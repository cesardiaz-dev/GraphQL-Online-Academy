import mutation from "./mutation.js";
import query from "./query.js";
import type from "./type.js";

const resolvers = {
    ...query,
    ...type,
    ...mutation
};

export default resolvers;