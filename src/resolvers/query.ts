import { database } from "../data/data.store.js";

const query = {
    Query: {
        students: () => database.estudiantes
    }
};

export default query;