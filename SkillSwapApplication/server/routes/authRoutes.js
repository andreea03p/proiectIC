const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, resetPassword } = require('../controllers/authController');

// Updated CORS middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
);

// Alternatively, you can move this to your main app.js file
// instead of applying it only to this router

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reset-pass', resetPassword);


module.exports = router;