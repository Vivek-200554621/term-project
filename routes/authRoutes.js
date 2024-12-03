const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Render login page
router.get('/login', authController.renderLoginPage);

// Handle login request
router.post('/login', authController.loginUser);

// Render register page
router.get('/register', authController.renderRegisterPage);

// Handle register request
router.post('/register', authController.registerUser);

// Handle logout
router.get('/logout', authController.logoutUser);

module.exports = router;
