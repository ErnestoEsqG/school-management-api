import express from "express";
import coursesController from '../controllers/coursesController';
const router = express.Router();


router.get('/', coursesController.consult);

router.post('/', coursesController.input);
router.post('/registerStudent', coursesController.associateStudent);

router.route("/:id")
    .get(coursesController.consultDetail)
    .put(coursesController.update)
    .delete(coursesController.delete);

export default router;