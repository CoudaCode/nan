import { useState } from "react";
// import "./Sidebar.css";
import { useLocation, Link } from "react-router-dom";
function Sidebar({ isOpen, toggleSidebar }) {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  const toggle = () => {
    let navigation = document.querySelector('.sidebar ');
    let main = document.querySelector('.main');
    navigation.classList.toggle('open');
    main.classList.toggle('active');
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
    <>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {" "}
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
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
