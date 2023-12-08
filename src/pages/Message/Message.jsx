import {useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
// import Topbar from "../../components/Topbar/Topbar";
import "./Message.css";
function Message() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      <div
        className={`bg-[#1E2029] ${
          isSidebarOpen ? "sm:w-60" : "w-14"
        }  min-h-screen pt-4 transition-all`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="main flex-1 flex flex-col overflow-hidden open" id="main">
        {/*<Topbar />*/}
        <div className="h-full overflow-y-auto p-4 bg-[#1E2029]">Message</div>
      </div>
    </div>
  );
}

export default Message;
