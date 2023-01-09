import { database } from "../data/data.store.js";

const query = {
    Query: {
        students: () => database.estudiantes,
        student: (_: void, args: any) => database.estudiantes.filter(estudiante => estudiante.id === args.id)[0]
    }
};

export default query;