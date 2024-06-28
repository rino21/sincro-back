const express = require('express');
const router = express.Router();
const tachesController = require('../controllers/tachesController');

router.get('/', tachesController.getAllTaches);
router.get('/:id', tachesController.getTacheById);
router.post('/', tachesController.createTache);
router.put('/:id', tachesController.updateTache);
router.delete('/:id', tachesController.deleteTache);

module.exports = router;
