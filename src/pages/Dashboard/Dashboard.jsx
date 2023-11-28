import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
// // import Topbar from "../../components/Topbar/Topbar";
import "./dashboard.css";
function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
          <div className="flex justify-between w-full">
            <div className="bg-white w-3/12 m-2 text-black">
              <div className="p-4 bg-teal-500 text-white">
                <h1>Contacts</h1>
                <h2 className="my-8">2000</h2>
                <div className="text-right">
                  <i className="fa-solid fa-address-card"></i>
                </div>
              </div>
              <div className="p-2 text-teal-500 text-right">
                <Link><h1>Voir</h1></Link>
              </div>
            </div>
            <div className="bg-white w-3/12 m-2 text-black">
              <div className="p-4">
                <h1>Teams</h1>
                <h2 className="my-8">2000</h2>
                <div className="text-right text-violet-700">
                  <i class="fa-solid fa-users"></i>
                </div>
              </div>
              <div className="p-2 bg-violet-700 text-white text-right">
                <Link><h1>Voir</h1></Link>
              </div>
            </div>
            <div className="bg-white w-3/12 m-2 text-black">
              <div className="p-4 bg-teal-500 text-white">
                <h1>Messages envoyés</h1>
                <h2 className="my-8">2000</h2>
                <div className="text-right">
                  <i class="fa-brands fa-facebook-messenger"></i>
                </div>
              </div>
              <div className="p-2 text-teal-500 text-right">
                <Link><h1>Voir</h1></Link>
              </div>
            </div>
            <div className="bg-white w-3/12 m-2 text-black">
              <div className="p-4">
                <h1>Messages reçus</h1>
                <h2 className="my-8">2000</h2>
                <div className="text-right text-violet-700">
                  <i class="fa-solid fa-message"></i>
                </div>
              </div>
              <div className="p-2 bg-violet-700 text-white text-right">
                <Link><h1>Voir</h1></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
