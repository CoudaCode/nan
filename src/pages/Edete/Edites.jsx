import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import EdeteMessage from "../Message/EdeteMessage";
import { VerifyCookies } from "../Actions/VerifyCookies";
import EditeContact from "../Contact/EditeContact";







function Edites() {
  VerifyCookies();
  const pathname = useLocation().pathname;
  const Location = useNavigate();
  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        {
          pathname.includes('message') ? <EdeteMessage />  
          : pathname.includes('contact') ? <EditeContact />
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
