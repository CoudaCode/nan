import "./Reports.css";
import { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Deconnexion from "../Deconnexion/Deconnexion";
import DeleteContacts from "./DeleteContacts";
import DeleteGroupes from "./DeleteGroupes";
import DeleteMessages from "./DeleteMessages";
import MessageSending from "./MessageSending";
import { useNavigate } from "react-router";
import { IsCookies } from "../../outils/IsCookie";
import { toast } from "react-toastify";

function Reports() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
          <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
            <div className="flex items-center"> Rapports </div>
            <Deconnexion />
          </div>

          <MessageSending />

          <DeleteContacts />

          <DeleteMessages />

          <DeleteGroupes />

          
          
        </div>
      </>
  );
}

export default Reports;
