import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Successfully connected to mongodb");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("Can't connect to mongodb");
  }
};

export default connectDB;
