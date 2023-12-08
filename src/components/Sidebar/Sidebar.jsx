import { useEffect, useState } from "react";
import "./Sidebar.css";
import { useLocation, Link } from "react-router-dom";
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    const main = document.getElementById('main');
    setIsSidebarOpen(!isSidebarOpen);
    main.classList.toggle('open');
  };

  const toggling = event => {
    const Sidebar = document.getElementById('Sidebar');
    const main = document.getElementById('main');

    Sidebar.classList.toggle('open');
    main.classList.toggle('open');

  }

  const menuItems = [
    {
      iconClass: "bx bx-grid-alt",
      text: "Dashboard",
      to: "/dashboard",
    },
    {
      iconClass: "bx bxs-contact",
      text: "Contact",
      to: "/contact",
    },
    {
      iconClass: "bx bx-chat",
      text: "Messages",
      to: "/message",
    },
    {
      iconClass: "bx bx-broadcast",
      text: "Broadcast",
      to: "/broadcast",
    },
    {
      iconClass: "bx bx-space-bar",
      text: "Workspace",
      to: "/workspace",
    },
    {
      iconClass: "bx bxs-report",
      text: "Reports",
      to: "/reports",
    },
    {
      iconClass: "bx bx-user",
      text: "Profile",
      to: "/profile",
    },
    {
      iconClass: "bx bx-log-out",
      text: "Déconnexion",
      to: "/",
    },
  ];
  return (
      <div className={`Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all ${isSidebarOpen ? "open" : ""}`} id="Sidebar">
        {/* <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}> */}
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus icon"></i>
            <div className="logo_name">NaN-Send</div>
            <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
          </div>
          <ul className="nav-list">
            <li>
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>

            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={location.pathname === menuItem.to ? "active" : ""}>
                <Link to={menuItem.to}>
                  <i className={menuItem.iconClass}></i>
                  <span className="links_name">{menuItem.text}</span>
                </Link>
                <span className="tooltip">{menuItem.text}</span>
              </li>
            ))}

            {/* <li className="card">
              <div className="card-body">
                <h2 className="card-title">Nan Digital Academy</h2>
                <p className="card-text">Version 1.0.0</p>
              </div>
            </li> */}
          </ul>
        {/* </div> */}
      </div>
  );
}

export default Sidebar;
