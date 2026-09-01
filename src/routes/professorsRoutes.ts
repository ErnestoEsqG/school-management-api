import express from "express";
import professorsController from '../controllers/professorsController';
const router = express.Router();


router.get('/', professorsController.consult);

router.post('/', professorsController.input);

router.route("/:id")
    .get(professorsController.consultDetail)
    .put(professorsController.update)
    .delete(professorsController.delete);

export default router;