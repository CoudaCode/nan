<<<<<<< HEAD
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Cards from "./Cards";
import Resumes from "./Resumes";

=======
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// // import Topbar from "../../components/Topbar/Topbar";
import "./dashboard.css";
>>>>>>> c229243d70c18ff91e125a61be000e319648b709
function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar />
<<<<<<< HEAD
      <div className="main">
        <Topbar />
        <Cards />
        <Resumes />
=======
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">Dashbord</div>
>>>>>>> c229243d70c18ff91e125a61be000e319648b709
      </div>
    </>
  );
}

export default Dashboard;
