const express = require('express');
const router = express.Router();
const Auth = require('../controllers/authController');


router.post('/login', Auth.loginMembre);
router.post('/refreshToken', Auth.refreshToken)

module.exports = router;
