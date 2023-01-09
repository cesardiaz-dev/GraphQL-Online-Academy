import _ from "lodash";
import { database } from "../data/data.store.js";

const type = {
    Student: {
        courses: (parent: any) => {
            const list: Array<any> = [];
            parent.courses.map((id: String) => {
                list.push(_.filter(database.cursos, ["id", id])[0])
            });
            return list;
        }
    }
};

export default type;