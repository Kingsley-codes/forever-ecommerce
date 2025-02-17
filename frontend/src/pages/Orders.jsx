import { useContext, useState, useEffect } from "react";
import axios from 'axios';

import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { backendURL, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);  // 🔹 Add loading state
  const [error, setError] = useState(null);  // 🔹 Handle API errors

  useEffect(() => {
    if (token) {
      loadOrderData();
    }
  }, [token]);  // 🔹 Ensure it runs only when `token` is available

  const loadOrderData = async () => {

    if (!token) {
      console.warn("No token available. Skipping API call.");
      return;
    }

    setLoading(true);
    setError(null);  // 🔹 Reset error state before request

    try {
      const response = await axios.post(
        `${backendURL}/api/order/userorders`,
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });

        setOrderData(allOrdersItem.length > 0 ? allOrdersItem.reverse() : []);
      } else {
        console.warn("No orders found in API response");
        setOrderData([]);
      }
    } catch (error) {
      console.error("Error loading orders:", error);
      setError("Failed to load orders. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      {loading && <p className="text-center text-gray-500">Loading orders...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && orderData.length === 0 && !error && (
        <p className="text-center text-gray-500">No orders found.</p>
      )}

      <div>
        {!loading &&
          orderData.map((item, index) => (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-start gap-6 text-sm">
                <img
                  src={item.image?.[0] || "/placeholder.png"}  // 🔹 Prevent crashes if `image` is missing
                  className="w-16 sm:w-20"
                  alt={item.name || "Product Image"}
                />
                <div>
                  <p className="font-medium sm:text-base">{item.name}</p>
                  <div className="flex items-center gap-3 mt-1 text-base text-gray-700">
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1">
                    Date: <span className="text-gray-300">{new Date(item.date).toDateString()}</span>
                  </p>
                  <p className="mt-1">
                    Payment: <span className="text-gray-300">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                  <p className="text-sm md:text-base">{item.status}</p>
                </div>
                <button
                  onClick={loadOrderData}
                  className="border px-4 py-2 text-sm font-medium rounded-md"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Orders;
