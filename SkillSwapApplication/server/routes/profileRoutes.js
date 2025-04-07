const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

// Rute pentru profil
router.get('/user-profile', requireAuth, getUserProfile);
router.put('/update-profile', requireAuth, updateUserProfile);

module.exports = router;
