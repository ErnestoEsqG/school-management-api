"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProfessorsController {
    constructor() {
    }
    consult(req, res) {
        try {
            res.send("Consult Professors");
        }
        catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
    consultDetail(req, res) {
        const { id } = req.params;
        try {
            res.send("Consult details");
        }
        catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
    input(req, res) {
        try {
            res.send("Input");
        }
        catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
    update(req, res) {
        const { id } = req.params;
        try {
            res.send("Update");
        }
        catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
    delete(req, res) {
        const { id } = req.params;
        try {
            res.send("Delete");
        }
        catch (err) {
            if (err instanceof Error)
                res.status(500).send(err.message);
        }
    }
}
exports.default = new ProfessorsController(); //Exportamos la instancia de la clase
