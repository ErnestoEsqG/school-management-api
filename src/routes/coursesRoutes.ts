const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController.js');

router.get('/', coursesController.consult);

router.post('/', coursesController.input);
router.post('/registerStudent', coursesController.associateStudent);

router.route("/:id")
    .get(coursesController.consultDetail)
    .put(coursesController.update)
    .delete(coursesController.delete);

module.exports = router;