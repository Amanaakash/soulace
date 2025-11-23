import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Database connection function with retry logic
const connectDB = async (retries = 5) => {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    
    if (retries > 0) {
      console.log(`Retrying connection... (${retries} attempts remaining)`);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      return connectDB(retries - 1);
    }
    
    console.error("Failed to connect to MongoDB after multiple retries");
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
