// routes/membre.js
const express = require('express');
const router = express.Router();
const membreController = require('../controllers/membreController');

router.get('/', membreController.getAllMembres);
router.get('/:id', membreController.getMembreById);
router.post('/', membreController.createMembre);
router.put('/:id', membreController.updateMembre);
router.delete('/:id', membreController.deleteMembre);

module.exports = router;
