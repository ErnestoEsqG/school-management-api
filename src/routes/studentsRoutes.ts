const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController.js');

router.get('/', studentsController.consult);

router.post('/', studentsController.input);

router.route("/:id")
    .get(studentsController.consultDetail)
    .put(studentsController.update)
    .delete(studentsController.delete);

module.exports = router;
