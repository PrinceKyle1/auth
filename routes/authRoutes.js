const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', authController.register);
router.get('/verify/:token', authController.verifyEmail);
router.post('/login', authController.login);
router.post('/password-reset', authController.requestPasswordReset);
router.post('/reset-password/:token', authController.resetPassword);

// Protected route example
router.get('/protected', authMiddleware, (req, res) => res.send('Protected data'));

module.exports = router;
