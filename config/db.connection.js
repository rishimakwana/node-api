import mongoose from "mongoose";
import Config from './dev.config.json';

const connectDB = async () => {
    try {
        await mongoose.connect(Config.DB_CONNECT);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1);
    }
};

export default connectDB;
