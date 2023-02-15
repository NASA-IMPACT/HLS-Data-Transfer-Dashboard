import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        localStorage.removeItem("authenticate")

        navigate("/login")
    }, []);
};
  
export default Logout;
