const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,  // Numele utilizatorului este obligatoriu
    trim: true,      // Elimină spațiile de la început și sfârșit
  },
  email: {
    type: String,
    required: true,  // Emailul este obligatoriu
    unique: true,    // Asigură că emailul este unic în baza de date
    lowercase: true, // Transformă automat emailul în litere mici
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],  // Validare simplă pentru email
  },
  address: {
    type: String,
    trim: true,      // Elimină spațiile de la început și sfârșit
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  about: {
    type: String,
    trim: true,      // Elimină spațiile de la început și sfârșit
  },
  jobTitle: {
    type: String,
    trim: true,      // Elimină spațiile de la început și sfârșit
  },
  skills: {
    type: [String],  // Array de stringuri pentru abilități
    default: [],
  },
  password: {
    type: String,
    required: true,  // Parola este obligatorie
  },
  confirmPassword: {
    type: String,
    required: true,  // Confirmarea parolei este obligatorie
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Adaugă data creării utilizatorului automat
  },
});

// Validare pentru confirmarea parolei
userSchema.pre('save', function (next) {
  if (this.password !== this.confirmPassword) {
    const error = new Error('Parola și confirmarea parolei nu se potrivesc');
    next(error);
  } else {
    next();
  }
});

const UserModel = mongoose.model('UserProfile', userSchema);

module.exports = UserModel;
