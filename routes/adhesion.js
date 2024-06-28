const express = require('express');
const router = express.Router();
const adhesionController = require('../controllers/adhesionController');

router.get('/', adhesionController.getAllAdhesions);
router.get('/:club_id/:membre_id', adhesionController.getAdhesionByIds);
router.post('/', adhesionController.createAdhesion);
router.delete('/:club_id/:membre_id', adhesionController.deleteAdhesion);

module.exports = router;
