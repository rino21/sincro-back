const express = require('express');
const router = express.Router();
const paysController = require('../controllers/paysController');

router.get('/', paysController.getAllPays);
router.get('/:id', paysController.getPaysById);
router.post('/', paysController.createPays);
router.put('/:id', paysController.updatePays);
router.delete('/:id', paysController.deletePays);

module.exports = router;
