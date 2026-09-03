"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../db/connection");
const courseModel_1 = require("../models/courseModel");
const professorsModel_1 = require("../models/professorsModel");
const studentsModel_1 = require("../models/studentsModel");
class CoursesController {
    consult(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const courseRepository = connection_1.AppDataSource.getRepository(courseModel_1.Course);
                const data = yield courseRepository.find({
                    relations: { professor: true, students: true }
                });
                res.status(200).json(data);
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                }
            }
        });
    }
    consultDetail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const courseRepository = connection_1.AppDataSource.getRepository(courseModel_1.Course);
                const register = yield courseRepository.findOne({
                    where: { id: Number(id) },
                    relations: { professor: true, students: true }
                });
                if (!register) {
                    throw new Error("Course not found");
                }
                res.status(200).json(register);
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                }
            }
        });
    }
    input(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { name, description, professor_id, professor, profesor } = req.body;
                const professorId = (_a = professor_id !== null && professor_id !== void 0 ? professor_id : professor) !== null && _a !== void 0 ? _a : profesor;
                if (!name || !description || professorId === undefined) {
                    res.status(400).json({
                        error: "Missing required fields: name, description, professor_id"
                    });
                    return;
                }
                const professorRepository = connection_1.AppDataSource.getRepository(professorsModel_1.Professor);
                const professorRegister = yield professorRepository.findOneBy({
                    id: Number(professorId)
                });
                if (!professorRegister) {
                    throw new Error("Professor not found");
                }
                const courseRepository = connection_1.AppDataSource.getRepository(courseModel_1.Course);
                const newCourse = courseRepository.create({
                    name,
                    description,
                    professor: professorRegister
                });
                const register = yield courseRepository.save(newCourse);
                res.status(201).json(register);
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const { id } = req.params;
            try {
                const courseRepository = connection_1.AppDataSource.getRepository(courseModel_1.Course);
                const register = yield courseRepository.findOneBy({ id: Number(id) });
                if (!register) {
                    throw new Error("Course not found");
                }
                const { name, description, professor_id, professor, profesor } = req.body;
                const professorId = (_a = professor_id !== null && professor_id !== void 0 ? professor_id : professor) !== null && _a !== void 0 ? _a : profesor;
                const updateData = {};
                if (name !== undefined) {
                    updateData.name = name;
                }
                if (description !== undefined) {
                    updateData.description = description;
                }
                if (professorId !== undefined) {
                    const professorRepository = connection_1.AppDataSource.getRepository(professorsModel_1.Professor);
                    const professorRegister = yield professorRepository.findOneBy({
                        id: Number(professorId)
                    });
                    if (!professorRegister) {
                        throw new Error("Professor not found");
                    }
                    updateData.professor = professorRegister;
                }
                yield courseRepository.update(Number(id), updateData);
                const registerUpdated = yield courseRepository.findOne({
                    where: { id: Number(id) },
                    relations: { professor: true, students: true }
                });
                res.status(200).json(registerUpdated);
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                }
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const courseRepository = connection_1.AppDataSource.getRepository(courseModel_1.Course);
                const register = yield courseRepository.findOneBy({ id: Number(id) });
                if (!register) {
                    throw new Error("Course not found");
                }
                yield courseRepository.delete(Number(id));
                res.status(204).send();
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                }
            }
        });
    }
    associateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { student_id, course_id, Course_id } = req.body;
                const courseId = course_id !== null && course_id !== void 0 ? course_id : Course_id;
                if (student_id === undefined || courseId === undefined) {
                    res.status(400).json({
                        error: "Missing required fields: student_id, course_id"
                    });
                    return;
                }
                const studentRepository = connection_1.AppDataSource.getRepository(studentsModel_1.Student);
                const courseRepository = connection_1.AppDataSource.getRepository(courseModel_1.Course);
                const student = yield studentRepository.findOneBy({
                    id: Number(student_id)
                });
                const course = yield courseRepository.findOne({
                    where: { id: Number(courseId) },
                    relations: { students: true }
                });
                if (!student) {
                    throw new Error("Student not found");
                }
                if (!course) {
                    throw new Error("Course not found");
                }
                course.students = course.students || [];
                if (!course.students.some((registeredStudent) => registeredStudent.id === student.id)) {
                    course.students.push(student);
                }
                yield courseRepository.save(course);
                res.status(201).json({ respuesta: "Estudiante registrado exitosamente" });
            }
            catch (err) {
                if (err instanceof Error) {
                    res.status(500).send(err.message);
                }
            }
        });
    }
}
exports.default = new CoursesController();
