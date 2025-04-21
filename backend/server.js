import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());

app.use(cors({
    origin: [
        'https://forever-ecommerce-ns8g.onrender.com', // Your Render frontend URL
        'http://localhost:5173', // For local testing (frontend)
        'http://localhost:5174', // For local testing (admin panel)
    ],
    credentials: true
}));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);


app.get('/', (req, res) => {
    res.send('API Working');
})

app.listen(port, () => console.log('Server started on PORT: ' + port))