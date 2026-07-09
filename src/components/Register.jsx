import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'
import { toast } from 'react-toastify';


const Register = () => {
  const {formstate , setformState  } = useContext(AuthContext)
   const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")


    const handleSubmit = async(e) => {
      e.preventDefault()
      try {
        const res = await axios.post("https://e-com-backend-19bf.onrender.com/api/create-user" , {
          name,
          email,
          password
        })
       toast.success(res.data.message);
         setformState(true)
        
      } catch (error) {
        toast.error(
           error.response?.data?.message || "Something went wrong"
         );
        
      }

     
      
     
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-light text-gray-900 text-center">
          Create Account
        </h1>
        <p className="text-gray-500 text-center mt-2 font-light">
          Sign up to get started
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
          value={name} onChange={(e) => setName(e.target.value)}  />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
          value={email} onChange={(e) => setEmail(e.target.value)}  />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
           value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-black text-white py-3 font-light hover:bg-gray-900 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 font-light">
          Already have an account?{" "}
          <button  onClick={() => setformState(true)}
            
            className="text-black hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;