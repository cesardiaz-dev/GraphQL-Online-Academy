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
    },
    Course: {
        students: (parent: any) => {
            const list = <any>[];
            const id = parent.id;
            database.estudiantes.map((estudiante: any) => {
                if(estudiante.courses.filter((id: any) => id === parent.id) > 0) {
                    list.push(estudiante);
                }
            });
            return list;
        }
    }
};

export default type;