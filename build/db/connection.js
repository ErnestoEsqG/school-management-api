"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const studentsModel_1 = require("../models/studentsModel");
const professorsModel_1 = require("../models/professorsModel");
const courseModel_1 = require("../models/courseModel");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 33006,
    username: "root",
    password: "neto44x",
    database: "coursests",
    logging: true,
    entities: [studentsModel_1.Student, professorsModel_1.Professor, courseModel_1.Course],
    synchronize: true
});
