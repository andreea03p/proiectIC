const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    address: String,
    password: String,
    confirmPassword: String
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;