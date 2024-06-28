const express = require('express');
const router = express.Router();
const regionsController = require('../controllers/regionsController');

router.get('/', regionsController.getAllRegions);
router.get('/:id', regionsController.getRegionById);
router.post('/', regionsController.createRegion);
router.put('/:id', regionsController.updateRegion);
router.delete('/:id', regionsController.deleteRegion);

module.exports = router;
