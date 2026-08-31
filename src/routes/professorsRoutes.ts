const express = require('express');
const router = express.Router();
const professorsController = require('../controllers/professorsController.js');

router.get('/', professorsController.consult);

router.post('/', professorsController.input);

router.route("/:id")
    .get(professorsController.consultDetail)
    .put(professorsController.update)
    .delete(professorsController.delete);

module.exports = router;