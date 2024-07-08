const express = require('express');
const router = express.Router();
const rapportController = require('../controllers/rapportController');

// Routes
router.get('/', rapportController.getAllRapports);
router.get('/:id', rapportController.getRapportById);
router.post('/:membre_id', rapportController.upload.array('files', 10), rapportController.createRapport); // Allow up to 10 files
router.put('/:id/:membre_id', rapportController.upload.array('files', 10), rapportController.updateRapport); // Allow up to 10 files
router.delete('/:id/:membre_id', rapportController.deleteRapport);

module.exports = router;
