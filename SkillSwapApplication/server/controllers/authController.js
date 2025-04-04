const User = require("../models/user");
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
};

const resetPassword = async (req, res) => {
    try {
      const { email, newPassword, confirmPassword } = req.body;
  
      // Validate inputs
      if (!email) {
        return res.json({ error: "email is required" });
      }
      if (!newPassword || newPassword.length < 6) {
        return res.json({
          error: "new password is required and must be at least 6 characters long",
        });
      }
      if (newPassword !== confirmPassword) {
        return res.json({ error: "passwords do not match" });
      }
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ error: "user not found" });
      }
  
      // Hash the new password
      const hashedPassword = await hashPassword(newPassword);
  
      // Update user's password in the database
      user.password = hashedPassword;
      await user.save();
  
      res.json({ message: "password reset successful" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
// login endpoint'
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.json({
                error: 'no user found with this email'
            })
        }

        const match = await comparePassword(password, user.password)
        if(match) {
            jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json(user)
            })
        }
        if(!match) {
            res.json({
                error: "passwords do not match"
            })
        }

    } catch(error) {
        console.log(error)
    }
}

// register endpoint
const registerUser = async (req, res) => {
    try {
        const {name, email, address, password, confirmPassword} = req.body;

        if(!name) {
            return res.json({
                error: 'name is required',
            });
        }

        if(!address) {
            return res.json({
                error: 'address is required',
            });
        }
        
        if(!password || password.length < 6) {
            return res.json({
                error: 'password is required and must be at least 6 characters long',
            });
        }

        if(!confirmPassword || password !== confirmPassword) {
            return res.json({
                error: 'password confirmation is required and must match the password',
            });
        }

        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'there is already an account with this email',
            });
        }

        const hashedPassword = await hashPassword(password)
        const user = await User.create({
            name, 
            email, 
            address, 
            password: hashedPassword, 
            confirmPassword,
        });

        return res.json(user);

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    resetPassword,
};