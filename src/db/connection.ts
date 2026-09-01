import { DataSource} from "typeorm";
import {Student} from "../models/studentsModel";
import {Professor} from "../models/professorsModel";
import {Course} from "../models/courseModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "neto44x",
    database: "coursests",
    logging: true,
    entities: [Student, Professor, Course],
    synchronize: false

});