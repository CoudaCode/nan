import { useState } from "react";
<<<<<<< HEAD
import "./AdminSidebar.css";
import { useLocation, Link } from "react-router-dom";
function AdminSidebar() {
=======
import "./AdminSideBar.css";
import { useLocation, Link } from "react-router-dom";
import logo from "../../../assets/images/Nan-Send.png";
import _ from "lodash";

function AdminSideBar() {
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    const main = document.getElementById('main');
    setIsSidebarOpen(!isSidebarOpen);
    main.classList.toggle('open');
  };

<<<<<<< HEAD
  // const toggling = event => {
  //   const Sidebar = document.getElementById('Sidebar');
  //   const main = document.getElementById('main');

  //   Sidebar.classList.toggle('open');
  //   main.classList.toggle('open');

  // }
=======
  const generatePath = (text) => `/admin/${_.deburr(text).toLocaleLowerCase('en-US')}`;
  // function(){return `/admin/${_.deburr(this.text).toLocaleLowerCase('en-US')}`},
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f

  const menuItems = [
    {
      iconClass: "bx bx-grid-alt",
<<<<<<< HEAD
      text: "Historique",
      to: "/Admin",
    },
    {
      iconClass: "bx bxs-contact",
      text: "Contact",
      to: "/contact",
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
=======
      text: "Dashboard",
      to: function(){return generatePath(this.text)}
    },
    {
      iconClass: "bx bxs-contact",
      text: "Entreprises",
      to: function(){return generatePath(this.text)}
    },
    {
      iconClass: "bx bxs-contact",
      text: "Contacts",
      to: function(){return generatePath(this.text)}
    },
    {
      iconClass: "bx bxs-contact",
      text: "Détails",
      to: function(){return generatePath(this.text)}
    },
    {
      iconClass: "bx bxs-contact",
      text: "Détails",
      to: function(){return generatePath(this.text)}
    },
    {
      iconClass: "bx bxs-contact",
      text: "Détails",
      to: function(){return generatePath(this.text)}
    },
    
  ];

  return (
      <div className={`Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all ${isSidebarOpen ? "open" : ""}`} id="Sidebar">
          <div className="logo-details">
            <img src={logo} alt="Logo" width={30+'px'} className="rounded" id="logo"/>
            <div className="logo_name p-2" id="logo_name">NaN Send</div>
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f
            <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
          </div>
          <ul className="nav-list">
            <li>
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..." />
              <span className="tooltip">Search</span>
            </li>

<<<<<<< HEAD
            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={location.pathname.includes(menuItem.to) ? "active" : ""}>
                <Link to={menuItem.to}>
=======

            {menuItems.map((menuItem, index) => (
              <li
                key={index}
                className={location.pathname.includes(menuItem.to()) ? "active" : ""}>
                <Link to={menuItem.to()}>
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f
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

<<<<<<< HEAD
export default AdminSidebar;
=======
export default AdminSideBar;
>>>>>>> 158f5fe6e1e0aca1a1a64827438f1ba4f26f911f
