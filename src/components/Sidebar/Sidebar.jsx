import { useState } from "react";
import "./Sidebar.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/images/Nan-Send.png";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    const main = document.getElementById("main");
    setIsSidebarOpen(!isSidebarOpen);
    main.classList.toggle("open");
  };


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
      iconClass: "bx bxs-report",
      text: "Reports",
      to: "/reports",
    },
    {
      iconClass: "bx bx-user",
      text: "Profile",
      to: "/profile",
    },
  ];
  return (
      <div className={`Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all ${isSidebarOpen ? "open" : ""}`} id="Sidebar">
          <div className="logo-details">
            <img src={logo} alt="Logo" width={30+'px'} className="rounded" id="logo"/>
            <div className="logo_name p-2" id="logo_name">NaN Send</div>
            <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
          </div>
          <ul className="nav-list">
            {
              menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className={location.pathname.includes(menuItem.to) ? "active" : ""}>
                  <Link to={menuItem.to}>
                    <i className={menuItem.iconClass}></i>
                    <span className="links_name">{menuItem.text}</span>
                  </Link>
                  <span className="tooltip">{menuItem.text}</span>
                </li>
              ))
            }
          </ul>
      </div>
  );
}

export default Sidebar;
