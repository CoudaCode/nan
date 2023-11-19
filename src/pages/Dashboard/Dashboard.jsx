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
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
          <div className="flex space-x-4 cardCaracteristiques">
            <div className="flex-1 cardCaracteristique p-2">
              <h3>Statistiques des messages</h3>
            </div>
            <div className="flex-1 cardCaracteristique p-2">
              <h3>Teams</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
