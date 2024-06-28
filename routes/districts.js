const express = require('express');
const router = express.Router();
const districtsController = require('../controllers/districtsController');

router.get('/', districtsController.getAllDistricts);
router.get('/:id', districtsController.getDistrictById);
router.post('/', districtsController.createDistrict);
router.put('/:id', districtsController.updateDistrict);
router.delete('/:id', districtsController.deleteDistrict);

module.exports = router;
