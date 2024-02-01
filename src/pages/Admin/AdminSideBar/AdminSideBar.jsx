import { useState } from "react";
import "./AdminSideBar.css";
import { DeleteCookies } from "../../../outils/IsCookie";
import { useLocation, Link } from "react-router-dom";
import logo from "../../../assets/images/Nan-Send.png";
import _ from "lodash";

function AdminSideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const toggleSidebar = () => {
    const main = document.getElementById('main');
    setIsSidebarOpen(!isSidebarOpen);
    main.classList.toggle('open');
  };

  const generatePath = (text) => `/admin/${_.deburr(text).toLocaleLowerCase('en-US')}`;
  const handleLogout = () => {
    DeleteCookies();
    setTimeout(() => window.location.reload(), 1500);
    };
  // function(){return `/admin/${_.deburr(this.text).toLocaleLowerCase('en-US')}`},

  const menuItems = [
    // {
    //   iconClass: "bx bx-grid-alt",
    //   text: "Dashboard",
    //   to: function(){return generatePath(this.text)}
    // },
    {
      iconClass: "bx bxs-contact",
      text: "Entreprise",
      to: function(){return generatePath(this.text)}
    },
    // {
    //   iconClass: "bx bxs-",
    //   text: "Déconnexion",
    //   to: function(){return generatePath(this.text)},
      
    // },
    
  ];

  return (
      <div className={`Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all ${isSidebarOpen ? "open" : ""}`} id="Sidebar">
          <div className="logo-details">
            <img src={logo} alt="Logo" width={30+'px'} className="rounded" id="logo"/>
            <div className="logo_name p-2" id="logo_name">NaN Send</div>
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
                className={location.pathname.includes(menuItem.to()) ? "active" : ""}>
                <Link to={menuItem.to()}>
                  <i className={menuItem.iconClass}></i>
                  <span className="links_name">{menuItem.text}</span>
                </Link>
                <span className="tooltip">{menuItem.text}</span>
              </li>
            ))}
            

            <li className="card">
              <div className="card-body" onClick={()=>{handleLogout()}}>
                <h2 className="card-title">Deconnexion</h2>
              </div>
            </li>
          </ul>
        {/* </div> */}
      </div>
  );
}

export default AdminSideBar;
