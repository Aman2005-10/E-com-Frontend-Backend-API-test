import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [formstate , setformState] = useState(false);
    const [token , settoken] = useState("");
    const [user , setUser] = useState("");
    

    useEffect(() => {
     let savedToken =   localStorage.getItem("token")
     let saveduser = localStorage.getItem("user");
     if(saveduser){
       setUser(JSON.parse(saveduser));
     }
     settoken(savedToken)
    
    } , [])

    
  


    




    return (

        <AuthContext.Provider value={{formstate , setformState  , token , user  }}>

        {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider