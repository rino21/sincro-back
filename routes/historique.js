const express = require('express');
const router = express.Router();
const historique = require('../controllers/historiqueController')

router.get('/nombre', historique.getNombreHistorique);
router.get('/', historique.getAllHistorique);
router.get('/:id', historique.getAllHistoriqueById);

module.exports = router;
