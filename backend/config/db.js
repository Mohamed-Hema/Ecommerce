import mogngoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to mongodb");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
