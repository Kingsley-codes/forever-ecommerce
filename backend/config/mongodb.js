import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        });
        console.log(`MongoDB connected to database: ${conn.connection.name}`);
    } catch (error) {
        console.error("Full MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
