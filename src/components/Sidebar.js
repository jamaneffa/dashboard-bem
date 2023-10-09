function Sidebar() {
 return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Home</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <li className="nav-item">
          <a className="nav-link collapsed" href="/">
            <span>Pages</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <span>Charts</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">
            <span>Tables</span>
          </a>
        </li>

      </ul>
  );
}

export default Sidebar;
