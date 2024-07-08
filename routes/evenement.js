const express = require('express');
const router = express.Router();
const evenementController = require('../controllers/evenementController');

router.get('/', evenementController.getAllEvenements);
router.get('/:id', evenementController.getEvenementById);
router.post('/:membre_id', evenementController.createEvenement);
router.put('/:id/:membre_id', evenementController.updateEvenement);
router.delete('/:id/:membre_id', evenementController.deleteEvenement);

module.exports = router;
