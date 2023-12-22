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
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029] Contact">
        <div className=" overflow-y-none p-4  bg-[#1E2029]">Dashboard</div>
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
          <div className="w-full p-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8">

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Contacts</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right">
                    <i className="fa-solid fa-address-card"></i>
                  </div>
                </div>
                <div className="p-2 text-black font-extrabold text-right bg-white">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Teams</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right text-violet-700">
                    <i className="fa-solid fa-users text-white"></i>
                  </div>
                </div>
                <div className="p-2 bg-white text-black font-extrabold text-right">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Messages envoyés</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right">
                    <i className="fa-brands fa-facebook-messenger"></i>
                  </div>
                </div>
                <div className="p-2 text-black font-extrabold text-right bg-white">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Messages reçus</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right text-violet-700">
                    <i className="fa-solid fa-message text-white"></i>
                  </div>
                </div>
                <div className="p-2 bg-white text-black font-extrabold text-right">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>











      return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029] Contact">
        <div className=" overflow-y-none m-4 p-4  bg-[#1E2029]">Dashboard</div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4 overflow-Y-auto">
          {/* <div className="w-full p-4"> */}
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-8"> */}

              <div className="h-52 rounded-lg bg-violet-600 ">
                <div className="p-4">
                  <h1>Contacts</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right">
                    <i className="fa-solid fa-address-card"></i>
                  </div>
                </div>
                <div className="p-2 text-black font-extrabold text-right bg-white">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Teams</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right text-violet-700">
                    <i className="fa-solid fa-users text-white"></i>
                  </div>
                </div>
                <div className="p-2 bg-white text-black font-extrabold text-right">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Messages envoyés</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right">
                    <i className="fa-brands fa-facebook-messenger"></i>
                  </div>
                </div>
                <div className="p-2 text-black font-extrabold text-right bg-white">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>

              <div className="h-52 rounded-lg bg-violet-600">
                <div className="p-4">
                  <h1>Messages reçus</h1>
                  <h2 className="my-8">2000</h2>
                  <div className="text-right text-violet-700">
                    <i className="fa-solid fa-message text-white"></i>
                  </div>
                </div>
                <div className="p-2 bg-white text-black font-extrabold text-right">
                  <Link>
                    <h1>Voir</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
    </>
  );
}

export default Dashboard;