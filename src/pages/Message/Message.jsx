
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { IsCookies } from "../../outils/IsCookie";
import ContentMessage from "./Content";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ListingMessage from "./ListingMessage";
import Deconnexion from "../Deconnexion/Deconnexion";

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
        <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
          <div className="flex items-center"> Messages </div>
          <Deconnexion />
        </div>

       <ContentMessage />

        <ListingMessage />
        
      </div>
    </>
  );
}

export default Message;
