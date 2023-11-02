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
  const path = useLocation().pathname;
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const menuItems = [
    {
      to: "/dashboard",
      icon: <FiHome />,
      text: "Dashboard",
    },
    {
      to: "/broadcast",
      icon: <FiSend />,
      text: "Broadcast",
    },
    {
      to: "/message",
      icon: <FiMessageCircle />,
      text: "Messages",
    },
    {
      to: "/contact",
      icon: <FiUser />,
      text: "Contacts",
    },
    {
      to: "/profile",
      icon: <FiSettings />,
      text: "Profile",
    },
    {
      to: "/workspace",
      icon: <FiBriefcase />,
      text: "Workspace",
    },
    {
      to: "/",
      icon: <FiLogOut />,
      text: "Deconnexion",
    },
  ];

  return (
    <>
      <div className="Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all">
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
      </div>
    </>
  );
}

export default Sidebar;
