const express = require('express');
const router = express.Router();
const tachesController = require('../controllers/tachesController');

router.get('/', tachesController.getAllTaches);
router.get('/:id', tachesController.getTacheById);
router.post('/:membre_id', tachesController.createTache);
router.put('/:id/:membre_id', tachesController.updateTache);
router.delete('/:id/:membre_id', tachesController.deleteTache);

module.exports = router;
