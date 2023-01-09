import { database } from "../data/data.store.js";

const mutation = {
    Mutation: {
        addCourse: (_: void, args: any) => {
            const { course } = args;

            const item = {
                id: String(database.cursos.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: []
            };

            // Validar si titulo no existe
            if(database.cursos.filter(curso => curso.title === item.title).length === 0) {
                database.cursos.push(item);

                return item;
            }
            
            return {
                id: "-1",
                title: `El curso ya existe con este titulo`,
                clases: -1,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }

        },
        updateCourse: (_: void, args: any) => {
            const { course } = args;

            const existe = database.cursos.filter(curso => curso.id === course.id);
            if (existe.length > 0) {
                const index = database.cursos.indexOf(existe[0]);
                const valoraciones = database.cursos[index].reviews;

                course.reviews = valoraciones;
                database.cursos[index] = course;
            
                return course;
            }

            return {
                id: "-1",
                title: `El curso no existe en la base de datos`,
                clases: -1,
                time: 0.0,
                level: "ALL",
                logo: "",
                path: "",
                teacher: "",
                reviews: []
            }
        },
        // deleteCourse: (id: string) => {},
    }
}; 

export default mutation;