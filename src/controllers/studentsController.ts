import {Request, Response} from "express";
import { AppDataSource } from "../db/connection";
import {Student} from "../models/studentsModel";

class StudentsController {
    async consult(req: Request, res: Response): Promise<void> {
        try {
            const studentRepository = AppDataSource.getRepository(Student);
            const data = await studentRepository.find();
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
            const studentRepository = AppDataSource.getRepository(Student);
            const register = await studentRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error('Student not found');
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
            const { dni, name, last_name, email } = req.body;

            if (!dni || !name || !last_name || !email) {
                res.status(400).json({
                    error: 'Missing required fields: dni, name, last_name, email'
                });
                return;
            }

            const studentRepository = AppDataSource.getRepository(Student);
            const newStudent = studentRepository.create({
                dni,
                name,
                last_name,
                email
            });
            const register = await studentRepository.save(newStudent);
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
            const studentRepository = AppDataSource.getRepository(Student);
            const register = await studentRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error('Student not found');
            }

            await studentRepository.update(Number(id), req.body);
            const registerUpdated = await studentRepository.findOneBy({ id: Number(id) });

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
            const studentRepository = AppDataSource.getRepository(Student);
            const register = await studentRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error('Student not found');
            }

            await studentRepository.delete(Number(id));
            res.status(204).send();
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new StudentsController();