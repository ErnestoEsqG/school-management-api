import "dotenv/config";
import { DataSource } from "typeorm";
import { Student } from "../models/studentsModel";
import { Professor } from "../models/professorsModel";
import { Course } from "../models/courseModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: true,
    entities: [Student, Professor, Course],
    synchronize: false
});