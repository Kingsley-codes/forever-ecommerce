import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('DB Connected');
    });

    try {
        await mongoose.connect('mongodb://localhost:27017/e-commerce');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectDB;
