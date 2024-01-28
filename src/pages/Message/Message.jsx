
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {DeleteCookies, IsCookies } from "../../outils/IsCookie";
import ContentMessage from "./Content";
import {useState, useEffect } from "react";
import { toast } from "react-toastify";
import ListingMessage from "./ListingMessage";

function Message() {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(()=>{
    if(!IsCookies()){
      toast.error('Session expirée, veuillez vous connecter !');
      navigate('/connexion');
    }
  }, []);

  const handleLogout = () => {
    DeleteCookies();
    setConfirmationModalOpen(false);
    setTimeout(() => window.location.reload(), 1500);
  };
  
  return (
    <>
      <Sidebar />
      <div className="main p-4 flex-1 flex flex-col overflow-y-auto" id="main">
        <div className="flex justify-between items-center overflow-y-none p-2 bg-[#1E2029]">
          <div className="flex items-center"> Messages </div>
          <div>
            <button onClick={() => setConfirmationModalOpen(true)} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700">Déconnexion</button>
          </div>
          {isConfirmationModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>

              <div className="rounded-lg bg-purple-900 p-8 shadow-2xl z-10 w-[40rem]">
                <p className="text-xl text-center text-color-purple font-semibold mb-4">Êtes-vous sûr de vouloir vous déconnecter ?</p>

                <div className="flex justify-end">
                  <button onClick={() => setConfirmationModalOpen(false)} className="mr-4 bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-700" > Annuler </button>
                  <button onClick={handleLogout} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"> Oui, déconnectez-moi. </button>
                </div>
              </div>
            </div>
          )}
        </div>

       <ContentMessage />

        <ListingMessage />
        
      </div>
      
      
    </>
  );
}

export default Message;
