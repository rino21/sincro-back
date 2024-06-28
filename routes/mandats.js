const express = require('express');
const router = express.Router();
const mandatsController = require('../controllers/mandatsController');

router.get('/', mandatsController.getAllMandats);
router.get('/:membre_id/:fonction_id', mandatsController.getMandatByIds);
router.post('/', mandatsController.createMandat);
router.put('/:membre_id/:fonction_id', mandatsController.updateMandat);
router.delete('/:membre_id/:fonction_id', mandatsController.deleteMandat);

module.exports = router;
