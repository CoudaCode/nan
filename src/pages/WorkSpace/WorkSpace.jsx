
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

function WorkSpace() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
          WorkSpace
         </div>
      </div>
    </div>
  );
}

export default WorkSpace;