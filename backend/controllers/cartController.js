import userModel from '../models/userModel.js';

// Add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        // Validate required fields
        if (!userId || !itemId || !size) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Find the user and initialize cartData if it doesn't exist
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // Update cartData
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        // Update the user's cartData in the database
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added To Cart" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        // Validate required fields
        if (!userId || !itemId || !size || quantity === undefined) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Find the user and initialize cartData if it doesn't exist
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        // Ensure the item and size exist in the cart
        if (!cartData[itemId] || !cartData[itemId][size]) {
            return res.status(400).json({ success: false, message: "Item or size not found in cart" });
        }

        // Update the quantity
        cartData[itemId][size] = quantity;

        // Update the user's cartData in the database
        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Cart Updated" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get user cart data
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        // Validate required fields
        if (!userId) {
            return res.status(400).json({ success: false, message: "Missing userId" });
        }

        // Find the user
        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Return cartData (initialize as empty object if it doesn't exist)
        const cartData = userData.cartData || {};
        res.json({ success: true, cartData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart };