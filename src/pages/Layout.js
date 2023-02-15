import { Outlet, Link, Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import './Layout.css';

const Layout = () => {
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const authenticate = localStorage.getItem("authenticate");
    console.log(authenticate)
    if (authenticate) {
      navigate("/dashboard")
    } else{
      navigate("/login")
    }
  }, []);
  
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard/">Data Transfer Progress</Link>
        </li>
        <li>
          <Link to="/dashboard/health-of-data">Health of Data</Link>
        </li>
        <li>
          <Link to="/dashboard/technical-details">Technical Details</Link>
        </li>
        <li>
          <Link to="/dashboard/transfer-queue">Transfer Queue</Link>
        </li>
        <li>
          <Link to="/dashboard/logout">Logout</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
  
};

export default Layout;
