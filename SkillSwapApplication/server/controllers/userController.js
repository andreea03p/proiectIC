const User = require('../models/UserProfile');

const getUserProfile = async (req, res) => {
    try {
      const user = await User.findById(req.userId).select('-password -confirmPassword'); // exclude parole
      if (!user) return res.status(404).json({ error: 'User not found' });
  
      res.json(user);
    } catch (err) {
      console.error('Error in getUserProfile:', err);
      res.status(500).json({ error: 'Server error' });
    }
  };
  

const updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.userId, req.body, { new: true });
    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Update failed' });
  }
};

module.exports = { getUserProfile, updateUserProfile };
