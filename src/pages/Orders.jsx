import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function Orders() {
  const { token } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          "https://e-com-backend-19bf.onrender.com/api/get-user-order",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data.orders || []);
      } catch (error) {
        console.log(error);

        if (error.response?.status === 404) {
          setOrders([]);
        } else {
          toast.error("Failed to fetch orders");
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      getOrders();
    }
  }, [token]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex justify-center items-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500 font-light">
            Loading your orders...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-extralight text-gray-900">
            My Orders
          </h1>
          <p className="mt-2 text-gray-500 font-light">
            Track and manage all your recent purchases.
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-16 text-center">
            <h2 className="text-3xl font-light text-gray-900">
              No Orders Yet
            </h2>

            <p className="mt-4 text-gray-500 font-light">
              Looks like you haven't placed any orders yet.
            </p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-10"
            >
              {/* Header */}
              <div className="px-8 py-6 flex flex-wrap justify-between items-center border-b border-gray-100">
                <div>
                  <h2 className="text-lg font-medium text-gray-900">
                    Order #{order._id.slice(-8)}
                  </h2>

                  <p className="text-sm text-gray-500 font-light mt-1">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-light text-gray-900">
                    ₹{order.totalAmount}
                  </p>

                  <span className="inline-flex mt-3 rounded-full bg-green-50 text-green-700 px-4 py-1 text-sm font-light">
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Products */}
              <div className="px-8 py-4">
                {order.items.map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row justify-between items-center py-6 border-b last:border-none border-gray-100"
                  >
                    <div className="flex items-center gap-5">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-24 h-24 rounded-2xl object-cover bg-gray-100"
                      />

                      <div>
                        <h3 className="text-xl font-medium text-gray-900">
                          {item.product.title}
                        </h3>

                        <p className="mt-2 text-gray-500 font-light">
                          ₹{item.product.price}
                        </p>

                        <p className="text-gray-500 font-light">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 text-2xl font-light text-gray-900">
                      ₹{item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="uppercase tracking-widest text-xs text-gray-400">
                    Shipping
                  </h3>

                  <p className="mt-2 text-gray-700 font-light">
                    {order.shippingAddress}
                  </p>
                </div>

                <div>
                  <h3 className="uppercase tracking-widest text-xs text-gray-400">
                    Payment
                  </h3>

                  <p className="mt-2 text-gray-700 font-light">
                    {order.paymentMethod}
                  </p>
                </div>

                <div>
                  <h3 className="uppercase tracking-widest text-xs text-gray-400">
                    Order Name
                  </h3>

                  <p className="mt-2 text-gray-700 font-light">
                    {order.orderName}
                  </p>
                </div>

                <div className="text-left md:text-right">
                  <h3 className="uppercase tracking-widest text-xs text-gray-400">
                    Grand Total
                  </h3>

                  <p className="mt-2 text-3xl font-light text-gray-900">
                    ₹{order.totalAmount}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Orders;