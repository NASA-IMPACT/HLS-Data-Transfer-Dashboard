import { Outlet, Link} from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Data Transfer Progress</Link>
        </li>
        <li>
          <Link to="/health-of-data">Health of Data</Link>
        </li>
        <li>
          <Link to="/technical-details">Technical Details</Link>
        </li>
        <li>
          <Link to="/transfer-queue">Transfer Queue</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
};

export default Layout;
