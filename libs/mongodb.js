import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    console.log(process.env.PROJECTS_COUNT);
  } catch (error) {
    console.log("Could not connect to MongoDB");
  }
};

export default connectMongoDB;
