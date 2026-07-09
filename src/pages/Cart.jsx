import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Cart() {
    const {token} = useContext(AuthContext)
    const [cart , setCart] = useState()
    const [checkout , setcheckout] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        const getCart = async() => {
            try {

                const res = await axios.get("https://e-com-backend-19bf.onrender.com/api/get-cart" , {
                headers:{
                    Authorization:`Bearer ${token}`
                }
                })

               console.log(res.data.data);
setCart(res.data.data);

                

                
            } catch (error) {
                console.log(error)
            }
        }

        getCart()
    }, [token])

const subtotal =
  cart?.items?.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0) || 0;

const shipping = 0;
const discount = 0;
const total = subtotal + shipping - discount;

    const handleCheckout =  () => {
      setcheckout(true)
    }




   const handleorder = async () => {
  try {
    const shippingAddress = "XYZ";
    const orderName = "Xyz";

    const res = await axios.post(
      "https://e-com-backend-19bf.onrender.com/api/order-place",
      {
        shippingAddress,
        orderName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    toast.success(res.data.message);
    setcheckout(false)
    navigate("/my-order")
    
    console.log(res.data);
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};
 return (
  <div className="min-h-screen bg-gray-100 py-8">
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cart?.items?.length > 0 ? (
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition"
            >
              {/* Left Side */}
              <div className="flex items-center gap-5 w-full">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-32 h-32 rounded-xl object-cover border"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {item.product.title}
                  </h2>

                  <p className="text-gray-500 mt-2 line-clamp-2">
                    {item.product.description}
                  </p>

                  <p className="text-2xl font-bold text-black mt-3">
                    ₹{item.product.price}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-center gap-4">
                {/* Quantity */}
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg">
                    -
                  </button>

                  <span className="px-6 font-semibold">
                    {item.quantity}
                  </span>

                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-lg">
                    +
                  </button>
                </div>

                {/* Delete */}
                <button className="w-full bg-black hover:bg-red-500 text-white px-6 py-2 rounded-lg transition">
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                Total Items: {cart.items.length}
              </h2>
            </div>

            <button onClick={handleCheckout} className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="bg-white shadow-md rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-700">
              🛒 Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add some products to your cart.
            </p>
          </div>
        </div>
      )}
    </div>


<div>
 {checkout ? <div className="w-full new max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
  {/* Heading */}
  <div className='flex justify-between'>
     <h2 className="text-2xl font-bold text-gray-800 mb-6 ">
    Checkout
  </h2>

  <p className='cursor-pointer text-xl' onClick={() => setcheckout(false)}>✖</p>
  </div>

  {/* Price Details */}
  <div className="space-y-4">
    <div className="flex justify-between">
      <span className="text-gray-600">Subtotal</span>
      <span className="font-semibold">₹{subtotal}</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600">Shipping</span>
      <span className="font-semibold">₹0</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-600">Discount</span>
      <span className="font-semibold text-green-600">- ₹0</span>
    </div>

    <hr />

    <div className="flex justify-between text-xl font-bold">
      <span>Total</span>
      <span>₹{total}</span>
    </div>
  </div>

  {/* Checkout Button */}
  <button onClick={handleorder} className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition">
    Proceed to Checkout
  </button>
</div> : ""}
</div>


  </div>
);
}

export default Cart
