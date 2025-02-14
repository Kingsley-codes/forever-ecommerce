import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'

// Place orders using COD method
const placeOrder = async (req, res) => {
    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {

            userId,
            items,
            address,
            amount,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Place" })


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });


    }
}

// Place orders using Stripe method
const placeOrderStripe = async (req, res) => {

}

// Place orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

// All orders data for Admin Panel
const allOrders = async (req, res) => {

}

// User order data for frontend
const userOrder = async (req, res) => {
    try {

        const { userId } = req.body;

        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


// Update order status for admin panel
const updateStatus = async (req, res) => {

}


export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus }
