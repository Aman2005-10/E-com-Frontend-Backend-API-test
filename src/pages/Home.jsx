import React from 'react'
import Register from '../components/Register'
import Loginpage from '../components/Loginpage'
import WelcomeCard from '../components/WelcomeCard'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const {formstate , setformState } = useContext(AuthContext)
 
  
  return (
    <div>
      
     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
  <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <WelcomeCard />
   {formstate ? <Loginpage /> : <Register />  }
  </div>
</div>
      
      
      {/* <Loginpage /> */}
    </div>
  )
}

export default Home
