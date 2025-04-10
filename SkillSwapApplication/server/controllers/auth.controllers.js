import { User } from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { generateVerificationCode } from '../utils/generateVerificationCode.js';
export const signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        if(!email || !password || !name)
        {
            throw new Error("All fields are required!");
        }

        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            return res.status(400).json({success:false, message: "User already exists"});
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const verificationToken = generateVerificationCode();

        const user = new User({
            email, 
            password: hashedPassword,
            name

        })

        await user.save();

    } catch (error){
        res.status(400).json({success:false, message: error.message});
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

}

export const signin = async (req, res) => {
    res.send("login route");
}

