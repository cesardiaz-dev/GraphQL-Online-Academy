import { database } from "../data/data.store.js";

const type = {
    Student: {
        courses: (parent: any) => {
            const list= <any>[];
            parent.courses.map((id: String) => {
                list.push(database.cursos.filter((curso) => curso.id == id )[0]);
            });
            return list;
        }
    }
};

export default type;