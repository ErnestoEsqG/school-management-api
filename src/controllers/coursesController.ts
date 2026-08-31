const db = require('../database/connection.js');

class CoursesController {

    consult(req, res){
        try{
            db.query("SELECT * FROM courses",
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
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
            db.query("SELECT * FROM courses WHERE id = ?", [id],
                (err, rows) => {
                    if(err) {
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    input(req, res){
        try{
            const {name, description, professor_id } = req.body;
            db.query(`INSERT INTO courses (id, name, description, professor_id)
            VALUES (NULL, ?, ?, ?)`,
                [name, description, professor_id],(err, rows) => {
                    if(err){
                        res.status(400).send(err);
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
            const { name, description, professor_id } = req.body;
            db.query(`UPDATE courses 
             SET name = ?, description = ?, professor_id = ?
             WHERE id = ?`,
                [name, description, professor_id, id],(err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                        res.status(200).json({  respuesta: 'Registro actualizado exitosamente'});
                });
        } catch (err) {
            res.status(500).send(err.message);
        }

    }

    delete(req, res){
        const { id } = req.params;
        try{
            db.query(`DELETE FROM courses WHERE id = ?`,
                [id],(err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    if(rows.affectedRows == 1)
                        res.status(200).json({  respuesta: 'Registro Eliminado exitosamente'});
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    associateStudent(req, res){
        try{
            const { course_id, student_id } = req.body;
            db.query(`INSERT INTO students_courses (course_id, student_id)
            VALUES (?, ?)`,
                [course_id, student_id],(err, rows) => {
                    if(err){
                        res.status(400).send(err.message);
                    }
                    res.status(201).json({ respuesta: 'Estudiante registrado exitosamente' });
                });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new CoursesController;