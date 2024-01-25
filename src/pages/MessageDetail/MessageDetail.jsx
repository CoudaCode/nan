import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IsCookies } from "../../outils/IsCookie";
import Show from "./Show";
import Edite from "./Edite";
import { toast } from "react-toastify";






export default function MessageDetail() {

  const navigate = useNavigate();
  const windowUrl = window.location;
  const pathname = windowUrl.pathname;
  const detailPathname = pathname.split('/');
  const page = detailPathname[detailPathname.length-1];
  if(!IsCookies()){
    toast.error('e')
    setTimeout(() => navigate('/connexion'), 1000);
    
  }
  
  
  

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className=" overflow-y-none p-4  bg-[#1E2029]">
            <Link to={'/message'}><span>Message  </span></Link> &gt; <span>{page[0].toLocaleUpperCase()+page.slice(1)}</span>
        </div>
        {
          pathname.includes('show') ? 
          <Show /> : 
          pathname.includes('edit') ?
          <Edite /> :
          navigate('/message')
        }
        
      </div>
    </>
  )
}