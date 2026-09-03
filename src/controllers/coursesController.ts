import { Request, Response } from "express";
import { AppDataSource } from "../db/connection";
import { Course } from "../models/courseModel";
import { Professor } from "../models/professorsModel";
import { Student } from "../models/studentsModel";

class CoursesController {
    async consult(req: Request, res: Response): Promise<void> {
        try {
            const courseRepository = AppDataSource.getRepository(Course);
            const data = await courseRepository.find({
                relations: { professor: true, students: true }
            });
            res.status(200).json(data);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async consultDetail(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const courseRepository = AppDataSource.getRepository(Course);
            const register = await courseRepository.findOne({
                where: { id: Number(id) },
                relations: { professor: true, students: true }
            });

            if (!register) {
                throw new Error("Course not found");
            }

            res.status(200).json(register);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async input(req: Request, res: Response): Promise<void> {
        try {
            const { name, description, professor_id} = req.body;
            const professorId = professor_id;

            if (!name || !description || professorId === undefined) {
                res.status(400).json({
                    error: "Missing required fields: name, description, professor_id"
                });
                return;
            }

            const professorRepository = AppDataSource.getRepository(Professor);
            const professorRegister = await professorRepository.findOneBy({
                id: Number(professorId)
            });

            if (!professorRegister) {
                throw new Error("Professor not found");
            }

            const courseRepository = AppDataSource.getRepository(Course);
            const newCourse = courseRepository.create({
                name,
                description,
                professor: professorRegister
            });
            const register = await courseRepository.save(newCourse);

            res.status(201).json(register);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const courseRepository = AppDataSource.getRepository(Course);
            const register = await courseRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error("Course not found");
            }

            const { name, description, professor_id, professor, profesor } = req.body;
            const professorId = professor_id ?? professor ?? profesor;
            const updateData: Partial<Course> = {};

            if (name !== undefined) {
                updateData.name = name;
            }
            if (description !== undefined) {
                updateData.description = description;
            }
            if (professorId !== undefined) {
                const professorRepository = AppDataSource.getRepository(Professor);
                const professorRegister = await professorRepository.findOneBy({
                    id: Number(professorId)
                });

                if (!professorRegister) {
                    throw new Error("Professor not found");
                }

                updateData.professor = professorRegister;
            }

            await courseRepository.update(Number(id), updateData);
            const registerUpdated = await courseRepository.findOne({
                where: { id: Number(id) },
                relations: { professor: true, students: true }
            });

            res.status(200).json(registerUpdated);
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const courseRepository = AppDataSource.getRepository(Course);
            const register = await courseRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error("Course not found");
            }

            await courseRepository.delete(Number(id));
            res.status(204).send();
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }

    async associateStudent(req: Request, res: Response): Promise<void> {
        try {
            const { student_id, course_id, Course_id } = req.body;
            const courseId = course_id ?? Course_id;

            if (student_id === undefined || courseId === undefined) {
                res.status(400).json({
                    error: "Missing required fields: student_id, course_id"
                });
                return;
            }

            const studentRepository = AppDataSource.getRepository(Student);
            const courseRepository = AppDataSource.getRepository(Course);
            const student = await studentRepository.findOneBy({
                id: Number(student_id)
            });
            const course = await courseRepository.findOne({
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

            await courseRepository.save(course);
            res.status(201).json({ respuesta: "Estudiante registrado exitosamente" });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new CoursesController();
