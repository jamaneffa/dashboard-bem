import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/allproducts" className="nav-link">
          <span>Listado de Productos</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/allusers" className="nav-link">
          <span>Listado de Usuarios</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
