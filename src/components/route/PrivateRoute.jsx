import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const PrivateRoute = () => {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext);
    

    return token ? <Outlet /> : navigate("/") 
}

export default PrivateRoute;