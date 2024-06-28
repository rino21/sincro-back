// routes/fonctions.js
const express = require('express');
const router = express.Router();
const fonctionController = require('../controllers/fonctionController');

router.get('/', fonctionController.getAllFonctions);
router.get('/:id', fonctionController.getFonctionById);
router.post('/', fonctionController.createFonction);
router.put('/:id', fonctionController.updateFonction);
router.delete('/:id', fonctionController.deleteFonction);

module.exports = router;
