
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Broadcast.css"
function Broadcast() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="main flex-1 flex flex-col overflow-hidden open" id="main">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
          Broadcast
          
           </div>
      </div>
    </div>
  );
}

export default Broadcast;