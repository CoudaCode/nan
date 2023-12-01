import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Message.css"
function Message() {
  return (
    <div className="flex h-screen">
      <div className="Sidebar bg-[#1E2029] sm:w-60 min-h-screen w-14 pt-4 transition-all">
{/*<Sidebar />*/}
</div>
      <div className="flex-1 flex flex-col overflow-hidden">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">
        Message
        </div>
      </div>
    </div>
  );
}

export default Message;
