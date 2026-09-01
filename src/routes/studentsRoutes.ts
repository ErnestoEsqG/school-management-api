import express from "express";
import studentsController from '../controllers/studentsController';
const router = express.Router();


router.get('/', studentsController.consult);

router.post('/', studentsController.input);

router.route("/:id")
    .get(studentsController.consultDetail)
    .put(studentsController.update)
    .delete(studentsController.delete);

export default router;
