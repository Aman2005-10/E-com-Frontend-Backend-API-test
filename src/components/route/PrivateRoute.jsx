import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = () => {
    const {token} = useContext(AuthContext);
    

    return token ? <Outlet /> : <Navigate to="/login" replace /> 
}

export default PrivateRoute;