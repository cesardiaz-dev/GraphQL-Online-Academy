import query from "./query.js";
import type from "./type.js";

const resolvers = {
    ...query,
    ...type
};

export default resolvers;