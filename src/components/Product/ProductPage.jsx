import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function ProductPage() {
  const { token } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://e-com-backend-19bf.onrender.com/api/get-all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [token]);


 const handleCart = async (id) => {
  try {
    const res = await axios.post(
      "https://e-com-backend-19bf.onrender.com/api/create-cart",
      {
        productId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res.data.message);
    toast.success(res.data.message)
  } catch (error) {
    toast.error(error.response?.data || error.message)
    console.log(error.response?.data || error.message);
  }
};
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <div
            key={product._id}
            className="rounded-2xl border border-gray-200 bg-white shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-64 bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold">{product.title}</h2>

              <p className="text-gray-600 mt-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-bold text-black">
                  ₹{product.price}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    product.stock > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} In Stock`
                    : "Out of Stock"}
                </span>
              </div>

              <button onClick={() => handleCart(product._id)} className="w-full mt-5 py-3 rounded-lg bg-black text-white font-semibold  cursor-pointer">
                Add to Cart
              </button>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;