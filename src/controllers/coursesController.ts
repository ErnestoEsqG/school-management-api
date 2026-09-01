import {Request, Response} from "express";


class CoursesController {
    constructor() {

    }

    consult(req: Request, res: Response): void {
        try {
            res.send("Consult Courses");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    consultDetail(req: Request, res: Response): void {
        const { id } = req.params;
        try {
            res.send("Consult details");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    input(req: Request, res: Response): void {
        try {
            res.send("Input");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    update(req: Request, res: Response): void {
        const { id } = req.params;
        try {
            res.send("Update");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    delete(req: Request, res: Response): void {
        const { id } = req.params;
        try {
            res.send("Delete");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }

    associateStudent(req: Request, res: Response): void {
        const { id } = req.params;
        try {
            res.send("Associate student");
        } catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}

export default new CoursesController(); //Exportamos la instancia de la clase