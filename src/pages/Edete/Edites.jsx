import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EdeteMessage from "../Message/EdeteMessage";





function Edites() {
  const pathname = useLocation().pathname;
  const Location = useNavigate();
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        {
          pathname.includes('message') ? <EdeteMessage />  
          : pathname.includes('contact') ? <div ></div>
          : pathname.includes('groupe') ? <div ></div>
          : pathname.includes('collaborateur') ? <div ></div>
          : Location('/dashboard')
        }
        {/* <EdeteMessage /> */}
      </div>
    </>
  );
}

export default Edites;
