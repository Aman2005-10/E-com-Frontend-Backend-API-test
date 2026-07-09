import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from 'react-toastify';
import axios  from "axios";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const {formstate , setformState , token , settoken , setUser } = useContext(AuthContext)

  const navigate = useNavigate()
 
      const [email , setEmail] = useState("")
      const [password , setPassword] = useState("")

    
      const handleChange = async(e) => {
        e.preventDefault()
        try {

          

           const res = await axios.post("https://e-com-backend-19bf.onrender.com/api/login-user" , {
          email,
          password
        })

    

toast.success(res.data.message);

        localStorage.setItem("token" , (res.data.token))
        localStorage.setItem("user" , JSON.stringify(res.data.user))
        settoken(res.data.token);
        setUser(res.data.user);
        navigate("/dashboard");


       
       
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
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center mt-2 font-light">
          Sign in to continue
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleChange}>
          {/* Email */}
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="john@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition"
            value={email} onChange={(e) => setEmail(e.target.value)} />
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

          {/* Remember Me + Forgot Password */}
         

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-black text-white py-3 font-light hover:bg-gray-900 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 font-light">
          Don't have an account?{" "}
          <button  onClick={() => setformState(false)}
             
            className="text-black hover:underline"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;