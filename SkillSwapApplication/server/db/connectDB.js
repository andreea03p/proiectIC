import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");

  } catch (error) {
    console.log("Database cannot be connected", error);
    process.exit(1);
  }
};


const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      }
})

const collection = new mongoose.model("Clients", LoginSchema);
module.exports = collection;



