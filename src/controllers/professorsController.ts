const db = require('../database/connection.js');

class ProfessorsController {

    consult(req, res){
        try{
            db.query("SELECT * FROM professors",
                (err, rows) => {
                    if(err) {
                        return res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    consultDetail(req, res){
        const { id } = req.params;
        try{
            db.query("SELECT * FROM professors WHERE id = ?", [id],
                (err, rows) => {
                    if(err) {
                        return res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    input(req, res){
        try{
            const { dni, name, lastname, email, profesion, phone } = req.body;
            db.query("INSERT INTO professors\n" +
                "(id, dni, name, lastname, email, profesion, phone)\n" +
                "VALUES(NULL, ?, ?, ?, ?, ?, ?);",
                [dni, name, lastname, email, profesion, phone],(err, rows) => {
                    if(err){
                        return res.status(400).send(err);
                    }
                    res.status(201).json({ id: rows.insertId });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    update(req, res){
        const { id } = req.params;
        try{
            const { dni, name, lastname, email, profesion, phone} = req.body;
            db.query(`UPDATE professors
             SET dni = ?, name = ?, lastname = ?, email = ?, profesion = ?, phone = ?
             WHERE id = ?`,
                [dni, name, lastname, email, profesion, phone, id],(err, rows) => {
                    if(err){
                        return res.status(400).send(err);
                    }
                    if(rows.affectedRows === 1) {
                        return res.status(200).json({ respuesta: 'Registro actualizado exitosamente' });
                    }
                    return res.status(404).json({ error: 'Profesor no encontrado' });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    delete(req, res){
        const { id } = req.params;
        try{
            db.query(`DELETE FROM professors WHERE id = ?`,
                [id],(err, rows) => {
                    if(err){
                        return res.status(400).send(err);
                    }
                    if(rows.affectedRows === 1) {
                        return res.status(200).json({ respuesta: 'Registro Eliminado exitosamente' });
                    }
                    return res.status(404).json({ error: 'Profesor no encontrado' });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new ProfessorsController; //Exportamos la instancia de la clase