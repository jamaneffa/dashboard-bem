import { Link } from 'react-router-dom';
import { FaUsers, FaProductHunt, FaHouseUser} from "react-icons/fa";

function Sidebar() {

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <li className="nav-item active">
        <Link to="/" className="nav-link">
        <FaHouseUser/>
          <span> Home</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/allproducts" className="nav-link">
          <FaProductHunt/>
          <span> Listado de Productos</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/allusers" className="nav-link">
          <FaUsers/>
          <span> Listado de Usuarios</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
