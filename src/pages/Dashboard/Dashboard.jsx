import React, { useState } from "react";
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
      <div className="main flex-1 flex flex-col overflow-hidden" id="main">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">Dashboard</div>
      </div>
    </>
  );
}

export default Dashboard;
