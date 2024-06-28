const express = require('express');
const router = express.Router();
const clubsController = require('../controllers/clubsController');

router.get('/', clubsController.getAllClubs);
router.get('/:id', clubsController.getClubById);
router.post('/', clubsController.createClub);
router.put('/:id', clubsController.updateClub);
router.delete('/:id', clubsController.deleteClub);

module.exports = router;
