import { useState } from "react";
import {
  FiHome,
  FiSend,
  FiMessageCircle,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiLogOut,
} from "react-icons/fi";
import "./Sidebar.css";
import { useLocation, Link } from "react-router-dom";
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    {
      iconClass: "bx bx-grid-alt",
      text: "Dashboard",
      to: "/dashboard", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-user",
      text: "Contact",
      to: "/contact", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-chat",
      text: "Messages",
      to: "/message", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-pie-chart-alt-2",
      text: "Broadcast",
      to: "/broadcast", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-folder",
      text: "Workspace",
      to: "/workspace", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-cart-alt",
      text: "Reports",
      to: "/reports", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-heart",
      text: "Profile",
      to: "/profile", // Définissez l'URL ici
    },
    {
      iconClass: "bx bx-log-out",
      text: "Déconnexion",
      to: "/", // Définissez l'URL ici
    },
  ];
  return (
    <>
      <div className="Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all">
        {/* 
        <div className="text-center text-white p-4 sm:p-6">
          <span className="text-violet-800 font-bold text-2xl sm:text-3xl">
            NaN-
          </span>
          <span className="text-violet-800 font-bold text-2xl sm:text-3xl">
            Send
          </span>
        </div>
        <ul className="mt-11 bg-white rounded-lg">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${
                path === item.to ? "active" : ""
              } hover:bg-gray-800 cursor-pointer text-gray-800 sm:justify-start px-4 h-12 flex items-center justify-center`}
              onClick={() => handleItemClick(index)}>
              {item.icon}
              <Link to={item.to}>
                <span className="ml-3 hidden sm:block text-gray-800 font-semibold tracking-wide hover:text-white transition-colors">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="dropdown rounded-4 m-2 mt-20 p-4 bg-white rounded-2xl">
          <h5 className="text-black font-bold">NAN DIGITAL ACADEMY</h5>
          <h6 className="font-bold text-gray-500 text-center">Version: 1.0.0.11</h6>
        </div>
      */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="logo-details">
            <i className="bx bxl-c-plus-plus icon"></i>
            <div className="logo_name">CodingStella</div>
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
      </div>
    </>
  );
}

export default Sidebar;
