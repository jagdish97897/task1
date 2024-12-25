const express = require('express');
const { login, refresh, logout, signup } = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', verifyToken(), logout);

module.exports = router;
