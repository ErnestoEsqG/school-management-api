import {Request, Response} from "express";
import { AppDataSource } from "../db/connection";
import {Professor} from "../models/professorsModel";

class ProfessorsController {
    async consult(req: Request, res: Response): Promise<void> {
        try {
            const ProfessorRepository = AppDataSource.getRepository(Professor);
            const data = await ProfessorRepository.find();
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
            const ProfessorRepository = AppDataSource.getRepository(Professor);
            const register = await ProfessorRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error('Professor not found');
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
            const { dni, name, last_name, email, profesion, phone } = req.body;

            if (!dni || !name || !last_name || !email || !profesion || !phone) {
                res.status(400).json({
                    error: 'Missing required fields: dni, name, last_name, email'
                });
                return;
            }

            const ProfessorRepository = AppDataSource.getRepository(Professor);
            const newProfessor = ProfessorRepository.create({
                dni,
                name,
                last_name,
                email,
                profesion,
                phone
            });
            const register = await ProfessorRepository.save(newProfessor);
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
            const ProfessorRepository = AppDataSource.getRepository(Professor);
            const register = await ProfessorRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error('Professor not found');
            }

            await ProfessorRepository.update(Number(id), req.body);
            const registerUpdated = await ProfessorRepository.findOneBy({ id: Number(id) });

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
            const ProfessorRepository = AppDataSource.getRepository(Professor);
            const register = await ProfessorRepository.findOneBy({ id: Number(id) });

            if (!register) {
                throw new Error('Professor not found');
            }

            await ProfessorRepository.delete(Number(id));
            res.status(204).send();
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}

export default new ProfessorsController();