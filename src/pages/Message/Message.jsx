
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IsCookies } from "../../outils/IsCookie";
import ContentMessage from "./Content";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ListingMessage from "./ListingMessage";

function Message() {

  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, []);
  
  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className=" overflow-y-none p-4   bg-[#1E2029]">Messages</div>

       <ContentMessage />

        <ListingMessage />
        
      </div>
      
      
    </>
  );
}

export default Message;
